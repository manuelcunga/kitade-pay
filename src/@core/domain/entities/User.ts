import { v4 as uuid } from "uuid";

export class Users {
  id?: string;
  name: string;
  email: string;
  password: string;
  phone: number;
  birth_date: string;
  createdAt: Date;


  constructor(
    name: string,
    email: string,
    phone: number,
    password: string,
    birth_date: string,
    createdAt: Date,
    id?: string
    
  ) {
    this.id = id ?? uuid();
    this.name = name
    this.email = email
    this.phone = phone
    this.birth_date = birth_date
    this.createdAt = createdAt
    this.password  = password
  }

}
