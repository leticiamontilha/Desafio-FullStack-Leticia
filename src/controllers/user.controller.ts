import { Request, Response, response} from "express"
import createUserService from "../services/user/createUserService.service"
import listAllUsersService from "../services/user/listAllUserService.service"
import listUserService from "../services/user/listUserIdService.service"
import { IUserUpdate } from "../interfaces/users.interface"
import updateUserService from "../services/user/updateUserService.service"
import softDeleteUserService from "../services/user/deleteUserService.service"

const createUserController = async (request: Request, Response:Response) => {
    const userData = request.body
    console.log(userData)
    const user = await createUserService(userData)
    return response.status(201).json(user)
}

const listAllUsersController = async (request: Request, response: Response) => {

    const allUsers = await listAllUsersService()

    return response.json(allUsers)
}

const listUserController = async (request: Request, response: Response) => {

   const user = await listUserService(request.params.id)
   
   return response.status(200).json(user)
}

const updateUserController = async (request: Request, response: Response) => {
    const userId = request.params.id
    const userData: IUserUpdate = request.body
    const updateUser = await updateUserService(userData, userId)

    return response.status(200).json(updateUser)
}

const deleteUserController = async (request: Request, response: Response) => {
    const userId = request.params.id
    const userDelete = await softDeleteUserService(userId)

    return response.json()
}



export {
    createUserController,
    listAllUsersController,
    listUserController,
    updateUserController,
    deleteUserController
}