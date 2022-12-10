import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserUseCases } from 'src/@core/domain/usecases/create/create-user';
import { CreateUserDTO } from '../../dtos/createUserDTO';

@Controller('api/v1/user')
export class CreateUserController {
  constructor(
      private readonly createUserUseCase: CreateUserUseCases
    ) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  async handle(@Body() data: CreateUserDTO) {
    return await this.createUserUseCase.create(
      data.name,
      data.email,
      data.phone,
      data.password,
      data.birth_date,
      data.createdAt
    );
  }
}
