import express from "express"
import "dotenv/config"
import cors from "cors"
import chatRouter from "./Router/chatRoutes.js"

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api" , chatRouter)
app.listen(process.env.PORT , () => console.log(`server started at ${process.env.PORT}`))