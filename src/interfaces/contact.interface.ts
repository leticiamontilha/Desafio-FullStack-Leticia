import { z } from "zod"
import { DeepPartial } from "typeorm"
import { contactsSchema, returnContactSchema } from "../schemas/contact.schema"

type IContact = z.infer<typeof contactsSchema>
type IContactReturn = z.infer<typeof returnContactSchema>
type IContactUpdate = DeepPartial<IContact>

export {
    IContact,
    IContactReturn,
    IContactUpdate
}