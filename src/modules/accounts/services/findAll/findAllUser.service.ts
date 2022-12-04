import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/infra/database/typeorm/repositories/users/UserRepositories';

@Injectable()
export class FindAllUserServuce {
  constructor(private usersRepository: UserRepository) {}

  async execute() {
    return await this.usersRepository.findAllUsers();
  }
}
