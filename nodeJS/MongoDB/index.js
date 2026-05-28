import { MongoClient } from "mongodb"
const URI = 'mongodb://127.0.0.1:27017/'
const client = new MongoClient(URI)
async function igniteDb() {
	try {
		await client.connect()
		//Mongo db has a character like if the db not exist it will create a new one 
		console.log("Mongo DB Connected")
		const db = client.db('sample_1')
		//getting or having a collection
		const collection = db.collection('users')
		//inserting data
		await collection.insertOne({name : 'Maddy' , age : 18})
		client.close()
	}
	catch(error) {
		console.log(error)
	}
}
igniteDb()