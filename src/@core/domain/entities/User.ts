import { v4 as uuid } from "uuid";
import { hashSync } from "bcrypt";

export class Users {
  id?: string;
  name: string;
  email: string;
  password: string;
  phone: number;
  birth_date: Date;
  createdAt: Date


  constructor(
    name: string,
    email: string,
    phone: number,
    password: string,
    birth_date: Date,
    createdAt: Date,
    id?: string
    
  ) {
    this.id = id ?? uuid();
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.password = password
    this.birth_date = birth_date;
    this.createdAt = createdAt
  }

  // changeName(name: string) {
  //   this.name = name;
  // }

  // changePhone(phone: number) {
  //   this.phone = phone;
  // }
}
