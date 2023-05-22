import { AppDataSource } from "../../data-source"
import { response } from "express"
import { User } from "../../entities"
import { IUser, IUserReturn } from "../../interfaces/users.interface"
import { returnUserSchema } from "../../schemas/users.shema"

const createUserService = async (userData: IUser): Promise<IUserReturn> => {
    const userRepository = AppDataSource.getRepository(User)

    const emailExist = await userRepository.findOne({
        where: {
            email: userData.email
        }
    })

    if(emailExist){
        response.status(409).json({
            message: "Email already exists"
       })
    }

    const user = userRepository.create(userData)

    await userRepository.save(user)

    const newUser = returnUserSchema.parse(user)

    return newUser
}

export default createUserService