import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../errors"

const softDeleteUserService = async (idUser: string): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({
        id: idUser
    })

    if(!findUser){
        throw new AppError("User not found", 404)
    }


    await userRepository.softRemove(findUser!)
}


export default softDeleteUserService