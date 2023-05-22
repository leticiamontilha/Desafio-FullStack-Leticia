import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { User } from "../entities"

const userIdExistMiddleware = async (request: Request, response: Response, next: NextFunction): Promise<void> =>{
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUserId = await userRepository.findOne({
        where: {
            id: request.params.id
        }
    })
    
    if(!findUserId){
        response.status(409).json({
            message: "User not Found"
       })
    }

    return next()
}

export default userIdExistMiddleware