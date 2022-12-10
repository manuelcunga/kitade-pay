import { IsNotEmpty, IsEmail, IsNumber, IsDate, IsString, IsUUID } from 'class-validator';

export class CreateUserDTO {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsNumber()
  phone: number

  @IsNotEmpty()
  birth_date: string
  
  createdAt: Date
}
