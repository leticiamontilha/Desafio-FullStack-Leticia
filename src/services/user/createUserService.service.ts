import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { IUser, IUserReturn } from "../../interfaces/users.interface"
import { returnUserSchema } from "../../schemas/users.shema"
import { AppError } from "../../errors"

const createUserService = async (userData: IUser): Promise<IUserReturn> => {
    const userRepository = AppDataSource.getRepository(User)

    const emailExist = await userRepository.findOne({
        where: {
            email: userData.email
        }
    })

    if(emailExist){
        throw new AppError("Email already exists", 409)
    }

    const user = userRepository.create(userData)

    await userRepository.save(user)

    const newUser = returnUserSchema.parse(user)

    return newUser
}

export default createUserService