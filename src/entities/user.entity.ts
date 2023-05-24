import { getRounds, hashSync } from "bcryptjs"
import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    BeforeInsert,
    OneToMany
 } from "typeorm"
 import { Contact } from "./contact.entity"

 @Entity('users')

 export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 50})
    name: string

    @Column({length: 45})
    email: string

    @Column()
    phone_number: string

    @Column({length: 120})
    password: string 

    @CreateDateColumn()
    createdAt: Date 

    @BeforeInsert()
    hashPassword(){
        const isEncrypted = getRounds(this.password)
        if(!isEncrypted){
            this.password = hashSync(this.password, 10)
        }
    }

    @OneToMany(() => Contact, (contact) => contact.user)
    contacts: Contact[]

 }