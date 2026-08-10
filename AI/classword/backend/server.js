import { generateText } from 'ai';
import { groq } from '@ai-sdk/groq';
import dotenv from "dotenv"
import express from "express"
import cors from "cors"
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
const SYSTEM_PROMPT = "You are a friendly and charming chatbot.Keep your responses short, usually 1 to 2 sentences."
// let messages = []
app.post('/chat' ,async (req, res) => {
	try{
		const { messages} = req.body
		console.log(messages)
		//user give message
		// messages.push({
		// 	role : "user",
		// 	content : user_prompt
		// })
		const { text } = await generateText({
		model: groq("llama-3.1-8b-instant"),
		instructions : SYSTEM_PROMPT,
		messages,
		maxOutputTokens: 50
		});
		//AI generated assistant message
		// messages.push({
		// 	role : "assistant",
		// 	content : text
		// })
		res.json({reply : text})
		console.log("AI " , text);
	} catch(error) {
		console.error("Error backend while requesting from groq " , error)
		res.json({reply : null})
	}
})
app.listen(5000, () => {
	console.log("server is listening at 5000")
})

