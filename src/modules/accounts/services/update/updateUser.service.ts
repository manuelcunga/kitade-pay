import { Injectable, NotFoundException } from '@nestjs/common';
import { Users } from 'src/@core/domain/entities/User';
import { UserRepository } from 'src/infra/database/typeorm/repositories/users/UserRepositories';
import { UpdateUsersDTO } from '../../dtos/updateUser.dto';

@Injectable()
export class UpdateUserService {
  constructor(private usersRepository: UserRepository) {}

  async execute(id: string, data: UpdateUsersDTO): Promise<Users> {
    const users = await this.usersRepository.update(id, data);

    if (!users) {
      throw new NotFoundException(`Usuário não encontrado!`);
    }

    return users;
  }
}
