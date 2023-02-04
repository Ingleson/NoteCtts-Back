import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { User } from "./user.entity";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string

  @Column({
    length: 125
  })
  full_name: string

  @Column({
    length: 60,
    unique: true
  })
  email: string

  @Column({
    length: 11,
  })
  number: string

  @CreateDateColumn()
  createdAt: Date

  @ManyToOne((type) => User, (user) => user)  
  user: User
}