import 'express-async-errors'
import express, { Application } from 'express'
import cors from 'cors'
import { userRoutes } from './routers/users.routes'
import { loginRouter } from './routers/login.routes'
import { handleErrors } from './errors'
import { contactsRoute } from './routers/contacts.routes'

const app: Application =  express()
app.use(cors())
app.use(express.json())

app.use("/users", userRoutes)
app.use("/login", loginRouter)
app.use("/contacts", contactsRoute)


app.use(handleErrors)
export default app