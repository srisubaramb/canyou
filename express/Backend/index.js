import express from 'express'
import cors from 'cors'
import mongoose, { Schema } from 'mongoose'
const app = express()
app.listen(3000)
app.use(cors())
app.use(express.json())
const URI = 'mongodb://127.0.0.1:27017/'
const DB = 'user'
mongoose.connect(URI+DB)
.then(response => console.log("Connected successfully " + response))
.catch(err => console.log("Connection failed" + err))
const scheme = Schema({
	name : String,
	age : Number,
	native : String
})
const User = mongoose.model('user' , scheme)
app.post('/add-user' , (req,res) => User.create(req.body)
.then(response => { 
	res.json(response).status(200)
	console.log('Inserted obj '+response)
})
.catch(err => {
	console.log('Cannot insert ', err)
	res.status(500)
}))

app.put('/edit-user/:id' , async function (req, res)  {
	try {
		const updatedObj = await User.findByIdAndUpdate(req.params.id , req.body)
		res.json(updatedObj).status(200)
		console.log('Updated the obj ', updatedObj)
	} catch(err) {
		res.status(500)
		console.log("can't edit the data " , err)
	}
	}
)
app.get('/list-users' , async (req, res) => {
	try {
		const users = await User.find()
		res.json(users)
	}
	catch (err) {
		console.log("Can't get the user list " + err)
	}
}
)
app.get('/get-user/:id' , async (req, res) => {
	try {
		const {id} = req.params
		const user = await User.find({_id : id})
		res.json(user)
	}
	catch (err) {
		console.log("Can't get the user " + err)
	}
}
)
app.delete('/delete-user/:id' , async (req, res) => {
	try {
		const {id} = req.params
		const user = await User.findByIdAndDelete(id)
		res.json(user)
	}
	catch (err) {
		console.log("Can't get the user " + err)
	}
}
)