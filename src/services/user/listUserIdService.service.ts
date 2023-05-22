import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../errors"
import { IUserReturn } from "../../interfaces/users.interface"

const listUserService = async (userId: string): Promise<IUserReturn> => {
    const userRepository = AppDataSource.getRepository(User)
    
    const findUser = await userRepository.findOneBy(
        {
            id: userId
        }
    )

    if(!findUser){
        throw new AppError("User not found", 404)       
    }

    return findUser
}

export default listUserService