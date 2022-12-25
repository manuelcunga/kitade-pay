import { IsOptional } from "class-validator";

export class UpdateUsersDTO {

  @IsOptional()
  name: string;

  @IsOptional()
  email?: string;

  @IsOptional()
  password?: string;

  @IsOptional()
  phone?: number

  @IsOptional()
  birth_date?: string
  
  createdAt?: Date
}
