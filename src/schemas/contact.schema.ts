import { z } from 'zod'

const contactsSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone_number: z.string(),
    user: z.any()
  })

  const returnContactSchema = contactsSchema
  .extend({
    id: z.string().optional(),
    createdAt: z.date()
  })

  const updateContactSchema = contactsSchema.partial()

  export {
    contactsSchema,
    returnContactSchema,
    updateContactSchema
  }