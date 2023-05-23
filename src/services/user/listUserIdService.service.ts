import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { returnUserSchema } from "../../schemas/users.shema"

const listUserService = async (userId: string) => {
    const userRepository = AppDataSource.getRepository(User)
    
    const findUser = await userRepository.findOne({
            where: {id: userId},
            relations: {contacts: true}
        }
    )

    const returnUser = returnUserSchema.parse(findUser)

    return returnUser
}

export default listUserService