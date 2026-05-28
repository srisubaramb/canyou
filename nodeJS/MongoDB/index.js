import express from 'express'
import { MongoClient } from "mongodb"
const URI = 'mongodb://127.0.0.1:27017/'
const client = new MongoClient(URI)
const app = new express()
let collection;
async function igniteDb() {
	try {
		await client.connect()
		//Mongo db has a character like if the db not exist it will create a new one 
		console.log("Mongo DB Connected")
		const db = client.db('sample_1')
		//getting or having a collection
		collection = db.collection('users')
		//inserting data
		await collection.insertOne({name : 'Maddy' , age : 18})
		app.listen(3000, () => {
			console.log("Server connected")
		})
	}
	catch(error) {
		console.log(error)
	}
}
app.get('/add-user' ,async (req, res) => {
	const {name, age} = req.query
	const ack = await collection.insertOne({name, age})
	res.send(ack)
})
app.get('show-users' , async (req, res) => {
	const users = await collection.find()
	res.send(users)
})
igniteDb()