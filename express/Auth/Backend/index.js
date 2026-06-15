import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { configDotenv } from 'dotenv'
configDotenv()
const app = express()
app.use(cors())
app.use(express.json())
const db = 'users'
mongoose.connect(process.env.URI+db)
.then(res => console.log("Connected " + res))
.catch(err => console.log("Err in connection to db " + err))
const Schema = mongoose.Schema({
	name: {
		type:String
	}, 
	email: {
		type:String
	},
	password: {
		type:String
	}
})
const User = mongoose.model('User', Schema, 'users')

app.post('/signup', (req,res) => {
	const userData = req.body
	User.create(userData)
	.then(res => console.log("User signed up: " + res))
	.catch(err => console.log("Error in creating user : " + err))
	res.end()
})
app.post('/login', (req,res) => {
	const {email} = req.body
	User.find({email})
    .then(user => res.json(user))
	.catch(err => console.log("Error in finding user : " + err))
})
app.listen(3000, () => {
	console.log("Server connected successfully")
})