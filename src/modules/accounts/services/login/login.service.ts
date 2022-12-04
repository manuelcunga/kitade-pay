import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserRepository } from 'src/infra/database/typeorm/repositories/users/UserRepositories';

@Injectable()
export class LoginService {
  constructor(
    private usersRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async login(user) {
    const payload = { sub: user.id, email: user.email };

    return {
      token: this.jwtService.sign(payload, {
        secret: process.env.JWT_KEY,
        expiresIn: '3d',
      }),
    };
  }

  async validateUser(email: string, password: string) {
    const user = await this.usersRepository.findByEmail(email);

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) return null;

    return user;
  }
}
