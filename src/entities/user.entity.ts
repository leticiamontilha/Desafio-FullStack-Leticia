import { getRounds, hashSync } from "bcryptjs"
import {
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    BeforeInsert,
    OneToMany
 } from "typeorm"

 @Entity('users')

 export class User {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ length: 50})
    name: string

    @Column({length: 45})
    email: string

    @Column()
    phone_number: string

    @Column({length: 120})
    password: string 

    @CreateDateColumn({type: "date"})
    createdAt: string | Date

    @BeforeInsert()
    hashPassword(){
        const isEncrypted = getRounds(this.password)
        if(!isEncrypted){
            this.password = hashSync(this.password, 10)
        }
    }

    // @OneToMany(() => Contacts, (contact) => contact.user, { eager: true })
    // contacts: Contacts[]

 }