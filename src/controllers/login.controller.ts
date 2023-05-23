import { Request, Response } from "express"
import { ILogin } from "../interfaces/login.interface"
import createLoginService from "../services/login/loginUserService"

const createLoginController = async (request: Request, response: Response): Promise<Response> => {
    const loginData: ILogin = request.body
    const token = await createLoginService(loginData)

    return response.json({token})
}

export {
    createLoginController
}