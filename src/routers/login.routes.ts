import { Router } from "express"
import dataIsValidMiddleware from "../middlewares/verifyData.middleware"
import { loginSchema } from "../schemas/login.schema"
import { createLoginController } from "../controllers/login.controller"

const loginRouter: Router = Router()

loginRouter.post("", dataIsValidMiddleware(loginSchema), createLoginController)


export {
    loginRouter
}