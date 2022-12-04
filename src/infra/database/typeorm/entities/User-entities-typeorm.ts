import { hashSync } from 'bcrypt';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,

} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('users')   
export class UserTypeorm {
  @PrimaryGeneratedColumn('uuid')
  readonly id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: number;

  @Column()
  birth_date: Date

  @CreateDateColumn()
  createdAt: Date;

  // @BeforeInsert()
  // encryptPassword() {
  //   this.password = hashSync(this.password, 12);
  // }

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
