import {
  Body,
  Controller,
  Param,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UpdateUserDTO } from '../../dtos/updateUser.dto';
import { UpdateUserService } from '../../services/update/updateUser.service';

@Controller('users')
export class UpdateUserController {
  constructor(private readonly usersService: UpdateUserService) {}

  @UsePipes(ValidationPipe)
  @Put(':id')
  async handle(@Param('id') id: string, @Body() data: UpdateUserDTO) {
    return this.usersService.execute(id, data);
  }
}
