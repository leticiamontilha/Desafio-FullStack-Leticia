import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { AppError } from "../../errors";
import { IContactUpdate } from "../../interfaces/contact.interface";

const updateContactService = async (contactData: IContactUpdate, ContactId: string) => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const findContact = await contactRepository.findOneBy({
        id: ContactId
    })

    if (!findContact){
        throw new AppError("Contact not found", 404)
    }

    const newContact: IContactUpdate = {
        ...findContact,
        ...contactData
    }
    
    await contactRepository.save(newContact)

    return newContact
}

export default updateContactService