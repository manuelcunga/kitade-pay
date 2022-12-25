import {
  Body,
  Controller,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UpdateUsersDTO } from '../../dtos/updateUser.dto';
import { UpdateUserService } from '../../services/update/updateUser.service';

@UseGuards(AuthGuard('jwt'))
@Controller('api/v1/user/')
export class UpdateUserController {
  constructor(private readonly usersService: UpdateUserService) {}

  @Put('update/:id')
  async handle(@Param('id') id: string, @Body() data: UpdateUsersDTO) {
    return this.usersService.execute(id, data);
  }
}
