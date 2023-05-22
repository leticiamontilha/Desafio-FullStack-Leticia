import { Router } from "express"
import { createUserController, 
        deleteUserController, 
        listAllUsersController, 
        listUserController, 
        updateUserController } 
from "../controllers/user.controller"
import { userSchema } from "../schemas/users.shema"
import dataIsValidMiddleware from "../middlewares/verifyData.middleware"

export const userRoutes = Router()

userRoutes.post("", dataIsValidMiddleware(userSchema), createUserController)
userRoutes.get("", listAllUsersController)
userRoutes.get("/:id", listUserController)
userRoutes.patch("/:id", updateUserController)
userRoutes.delete("/:id", deleteUserController)