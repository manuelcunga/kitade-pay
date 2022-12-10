import { Users } from "../../entities/User";
import { IUserRepository } from "../../interface/IuserRespository";

export class CreateUserUseCases {
  constructor(private userRespository: IUserRepository){}

  async create(name: string, email: string, phone: number, password: string, birth_date: string,createdAt: Date) {
    const user = new Users( name, email, phone, password, birth_date, createdAt)
    await this.userRespository.create(user)
    return user
  }
}