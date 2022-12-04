import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDTO } from '../../dtos/createUserDTO';
import { CreateUserService } from '../../services/create/createUser.service';

@Controller('users')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post('/')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  async handle(@Body() data: CreateUserDTO) {
    return await this.createUserService.execute(data);
  }
}
