import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { IAllUsersReturn } from "../../interfaces/users.interface"
import { returnAllUsersSchema } from "../../schemas/users.shema"


const listAllUsersService = async (): Promise<IAllUsersReturn>  => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUsers = await userRepository.find()

    const allUsers =  returnAllUsersSchema.parse(findUsers)
    
    return allUsers 
}

export default listAllUsersService