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
import ensureAuthMidlleware from "../middlewares/ensureAuth.middleware"

export const userRoutes = Router()

userRoutes.post("", dataIsValidMiddleware(userSchema),createUserController)
userRoutes.get("", ensureAuthMidlleware, listAllUsersController)
userRoutes.get(
        "/:id",
        ensureAuthMidlleware,
        userIdExistMiddleware, 
        listUserController
)
userRoutes.patch(
        "/:id", 
        ensureAuthMidlleware, 
        userIdExistMiddleware, 
        updateUserController
)
userRoutes.delete(
        "/:id", 
        ensureAuthMidlleware,
        userIdExistMiddleware, 
        deleteUserController
)