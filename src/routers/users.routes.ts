import { Router } from "express"
import { createUserController, 
        deleteUserController, 
        listAllUsersController, 
        listUserController, 
        updateUserController } 
from "../controllers/user.controller"
import { userSchema } from "../schemas/users.shema"
import dataIsValidMiddleware from "../middlewares/verifyData.middleware"
import userIdExistMiddleware from "../middlewares/userIdExist.middleware"

export const userRoutes = Router()

userRoutes.post("", dataIsValidMiddleware(userSchema), createUserController)
userRoutes.get("", listAllUsersController)
userRoutes.get("/:id", userIdExistMiddleware, listUserController)
userRoutes.patch("/:id", userIdExistMiddleware, updateUserController)
userRoutes.delete("/:id", userIdExistMiddleware, deleteUserController)