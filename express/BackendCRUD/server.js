import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import productRouter from './routes/productRoutes.js'
dotenv.config()
const connectDB = async () => {
	try{
		await mongoose.connect(process.env.MONGO_URI)
		console.log('Mongodb connected successfully')
	}catch(error){
		console.error(`Database connection error : ${error.message}`)
		process.exit(1)
	}
}
connectDB()

const app = express()
const PORT = process.env.PORT || 5000
//MiddleWare
app.use(express.json() )
//Routes
app.use('/api/products' , productRouter)
app.listen(PORT , () => {
	console.log(`Server started in ${PORT}`)
})