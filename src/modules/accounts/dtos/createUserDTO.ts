import { IsNotEmpty, IsEmail, IsNumber, IsDate, IsString, IsUUID } from 'class-validator';

export class CreateUserDTO {

  @IsString()
  @IsUUID()
  id?: string

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
  @IsDate()
  birth_date: Date

  @IsDate()
  createdAt: Date
  
}
