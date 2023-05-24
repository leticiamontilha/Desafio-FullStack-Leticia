import { AppDataSource } from "../../data-source"
import { Contact, User } from "../../entities"
import { AppError } from "../../errors"
import { IContact } from "../../interfaces/contact.interface"
import jwt from "jsonwebtoken"


const createContactService = async (contactData: IContact, token: string) => {
    const contactRepository = AppDataSource.getRepository(Contact)
    const userRepository = AppDataSource.getRepository(User)

    let userId = ""
    token = token.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
        if(error){
            throw new AppError(error.message, 401)
        }
        
        userId = decoded.id
    })

    const findUser = await userRepository.findOneBy({
        id: userId
    })

    const findNameContact = await contactRepository.findOneBy({
        name: contactData.name
    })
    
    if(findNameContact){
        throw new AppError(
            "This name is already on your contacts list"
        )
    }

    const findEmail = await contactRepository.findOneBy({
        email: contactData.email
    })

    if(findEmail){
        throw new AppError(
            "This email is already on your contacts list"
        )
    }

    const findPhoneNumber = await contactRepository.findOneBy({
        phone_number: contactData.phone_number
    })

    if(findPhoneNumber){
        throw new AppError(
            "This phone number is already on your contacts list"
        )
    }

    const newContact = contactRepository.create({
        ...contactData,
        user: findUser!
    })

    await contactRepository.save(newContact)

    return newContact
}

export default createContactService