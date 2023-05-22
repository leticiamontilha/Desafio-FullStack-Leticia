import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { IUserReturn } from "../../interfaces/users.interface"

const listUserService = async (userId: string): Promise<IUserReturn> => {
    const userRepository = AppDataSource.getRepository(User)
    
    const findUser = await userRepository.findOneBy(
        {
            id: userId
        }
    )

    return findUser!
}

export default listUserService