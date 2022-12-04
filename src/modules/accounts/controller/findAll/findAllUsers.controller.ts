import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FindAllUserServuce } from '../../services/findAll/findAllUser.service';

@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class FindAllUsersController {
  constructor(private readonly userService: FindAllUserServuce) {}

  @Get('/')
  async handle() {
    return await this.userService.execute();
  }
}
