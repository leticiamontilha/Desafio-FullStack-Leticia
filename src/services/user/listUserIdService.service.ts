import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../errors"
import { returnUserSchema } from "../../schemas/users.shema"
import jwt from 'jsonwebtoken'

const listUserService: any = async (token: string) => {
    const userRepository = AppDataSource.getRepository(User)

    let userId = ""
    token = token.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
        if(error){
            throw new AppError(error.message, 401)
        }
        
        userId = decoded.id
    })
    
    const findUser = await userRepository.findOne({
            where: {id: userId},
            relations: {contacts: true}
        }
    )

    const returnUser = returnUserSchema.parse(findUser)

    return returnUser
}

export default listUserService