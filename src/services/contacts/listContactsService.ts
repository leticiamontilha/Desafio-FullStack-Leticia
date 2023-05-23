import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import jwt from "jsonwebtoken"
import { AppError } from "../../errors"

const listContactsService = async (token: string) => {
    const userRepository = AppDataSource.getRepository(User)

    let userId = ""
    token = token.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
        if(error){
            throw new AppError(error.message, 401)
        }
        
        userId = decoded.id
    })

    const userContacts = userRepository.findOne({
        select: {
            id: true,
            name: true,
            phone_number: true
        },
        where: {
            id: userId
        },
        relations: {
            contacts: true
        },
    })

    return userContacts
}

export default listContactsService
