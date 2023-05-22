import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
    JoinColumn
 } from "typeorm"
 import { User } from "./user.entity"

 @Entity("contact")
 export class Contact{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 50})
    name: string

    @Column({length: 45})
    email: string

    @Column({length: 11})
    phone_number: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(() => User, (user) => user.contacts, {onDelete: "CASCADE"})
    user: User
 }