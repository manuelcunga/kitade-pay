import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FindAllUserServuce } from '../../services/findAll/findAllUser.service';

@UseGuards(AuthGuard('jwt'))
@Controller('api/v1/')
export class FindAllUsersController {
  constructor(private readonly userService: FindAllUserServuce) {}

  @Get('/users')
  async handle() {
    return await this.userService.execute();
  }
}
