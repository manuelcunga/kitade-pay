import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from '../../../../infra/database/typeorm/repositories/users/UserRepositories';
import { CreateUserDTO } from '../../dtos/createUserDTO';

@Injectable()
export class CreateUserService {
  constructor(private createUserRepository: UserRepository) {}

  async execute(data: CreateUserDTO) {
    const alreadyUser = await this.createUserRepository.findByEmail(data.email);

    if (alreadyUser) {
      throw new BadRequestException('Este usuário já existe');
    }

    return await this.createUserRepository.create({
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
      birth_date: data.birth_date,
      createdAt: data.createdAt
    });
  }
}
