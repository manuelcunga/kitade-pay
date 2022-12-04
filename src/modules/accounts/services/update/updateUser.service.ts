import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from 'src/infra/database/typeorm/repositories/users/UserRepositories';
import { UpdateUserDTO } from '../../dtos/updateUser.dto';
import { User } from '../../entities/User';

@Injectable()
export class UpdateUserService {
  constructor(private usersRepository: UserRepository) {}

  async execute(id: string, data: UpdateUserDTO): Promise<User> {
    const users = await this.usersRepository.update(id, data);

    if (!users) {
      throw new NotFoundException(`Usuário não encontrado!`);
    }

    return users;
  }
}
