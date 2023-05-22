import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { IUserUpdate, IUserReturn } from "../../interfaces/users.interface"
import { returnUserSchema } from "../../schemas/users.shema"
import { hashSync } from "bcryptjs"

const updateUserService = async (newUserData: IUserUpdate, idUser: string): Promise<IUserReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({
        id: idUser
    })

    if (newUserData?.password){
        newUserData.password = hashSync(newUserData.password, 10)
    }

    const user = userRepository.create({
        ...findUser,
        ...newUserData
    })

    await userRepository.save(user)

    const updatedUser = returnUserSchema.parse(user)

    return updatedUser

}

export default updateUserService