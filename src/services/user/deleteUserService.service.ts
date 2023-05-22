import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"

const softDeleteUserService = async (idUser: string): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({
        id: idUser
    })

    await userRepository.softRemove(findUser!)
}


export default softDeleteUserService