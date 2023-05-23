import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities"

const deleteContactService = async (contactId: string) => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const findContact = await contactRepository.findOneBy({
        id: contactId!
    })

    await contactRepository.delete(findContact!.id)

}

export default deleteContactService