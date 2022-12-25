import { UserTypeorm } from "src/infra/database/typeorm/entities/User-entities-typeorm";
import { UpdateUsersDTO } from "src/modules/accounts/dtos/updateUser.dto";
import { Users } from "../entities/User";

export interface IUserRepository {
  create(data: Users): Promise<void>;
  findByEmail(email: string): Promise<UserTypeorm>;
  findAllUsers(): Promise<UserTypeorm[]>;
  update(id: string, data: UpdateUsersDTO): Promise<Users>;
  find(id: string): Promise<UserTypeorm>;
}
