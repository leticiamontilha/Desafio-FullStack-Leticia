import express, { Application } from 'express'

const app: Application =  express()
app.use(express.json())

// app.use("/users")
// app.use("/login")
// app.use("/contacts")

export default app