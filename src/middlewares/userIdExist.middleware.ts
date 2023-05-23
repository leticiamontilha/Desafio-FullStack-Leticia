import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { User } from "../entities"
import { AppError } from "../errors"

const userIdExistMiddleware = async (request: Request, response: Response, next: NextFunction): Promise<void> =>{
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUserId = await userRepository.findOne({
        where: {
            id: request.params.id
        }
    })
    
    if(!findUserId){
        throw new AppError("User not Found", 409)
    }

    return next()
}

export default userIdExistMiddleware