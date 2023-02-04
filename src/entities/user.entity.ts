import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  JoinTable,
  PrimaryGeneratedColumn
} from "typeorm";
import { Exclude } from "class-transformer"
import { Contact } from "./contact.entity";

@Entity("users")
export class User {
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
  
  @Column()
  @Exclude()
  password: string

  @Column({
    length: 11, 
    unique: true
  })
  number: string

  @CreateDateColumn()
  createdAt: Date

  @OneToMany((type) => Contact, (contacts) => contacts.user, {
    eager: true,
  })
  @JoinTable()
  contacts: Contact[]

}