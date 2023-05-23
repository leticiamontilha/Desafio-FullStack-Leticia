import { Request, Response} from "express"
import createContactService from "../services/contacts/createContactService"
import listContactsService from "../services/contacts/listContactsService"
import updateContactService from "../services/contacts/updateContactService"
import deleteContactService from "../services/contacts/deleteContactService.service"

const createContactController = async (request: Request, response: Response) => {
    const contactData = request.body
    const token: any = request.headers.authorization

    const createContact = await createContactService(contactData, token)

    return response.status(201).json(createContact)
}

const listContactsController = async (request: Request, response: Response) => {
    const token: any = request.headers.authorization

    const allContacts = await listContactsService(token)

    return response.status(200).json(allContacts)
}


const updateContactController = async (request: Request, response: Response) => {
    const contactData = request.body
    const contactId = request.params.id
    
    const updateContact = await updateContactService(contactData, contactId)

    return response.status(200).json(updateContact)
}

const deleteContactController = async (request: Request, response: Response) => {
    const contactId = request.params.id
    await deleteContactService(contactId)
    
    return response.status(204).json()
}



export {
    createContactController,
    listContactsController,
    updateContactController,
    deleteContactController
}