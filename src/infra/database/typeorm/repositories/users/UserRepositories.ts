import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUserRepository } from 'src/@core/domain/interface/IuserRespository';
import { CreateUserDTO } from 'src/modules/accounts/dtos/createUserDTO';
import { UpdateUserDTO } from 'src/modules/accounts/dtos/updateUser.dto';
import { UserTypeorm } from '../../entities/User-entities-typeorm';
import { Users } from 'src/@core/domain/entities/User';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserTypeorm)
    private readonly ormRepository: Repository<UserTypeorm>,
  ) {}

  public async create(data: Users): Promise<void> {
    const user = this.ormRepository.create({
      name: data.name,
      email: data.email,
      phone: data.phone,
      birth_date: data.birth_date,
      password: data.password,
      createdAt: data.createdAt
    });
    await this.ormRepository.save(user);
    // return user;
  }

  public async findByEmail(email: string): Promise<UserTypeorm> {
    return await this.ormRepository.findOne({ where: { email } });
  }

  public async findAllUsers(): Promise<UserTypeorm[]> {
    const users = await this.ormRepository.find({
      select: ['id', 'name', 'email', 'createdAt'],
    });
    return users;
  }

  public async update(id: string, data: UpdateUserDTO): Promise<UserTypeorm> {
    const user = await this.ormRepository.preload({
      id,
      ...data,
    });

    return await this.ormRepository.save(user);
  }

  public async find(id: string): Promise<UserTypeorm> {
    const Finduser = await this.ormRepository.findOne({ where: { id } });
    return Finduser;
  }
}