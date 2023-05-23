import { Router } from "express"
import { createContactController, deleteContactController, listContactsController, updateContactController } from "../controllers/contact.controller"
import { contactsSchema } from "../schemas/contact.schema"
import dataIsValidMiddleware from "../middlewares/verifyData.middleware"
import ensureAuthMidlleware from "../middlewares/ensureAuth.middleware"

const contactsRoute: Router = Router()

contactsRoute.post("", dataIsValidMiddleware(contactsSchema), createContactController)
contactsRoute.get("", ensureAuthMidlleware, listContactsController)
contactsRoute.patch("/:id", ensureAuthMidlleware, updateContactController)
contactsRoute.delete("/:id", ensureAuthMidlleware, deleteContactController )


export {
    contactsRoute
}