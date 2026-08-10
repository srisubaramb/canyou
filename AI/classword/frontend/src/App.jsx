import { useState } from "react"
import Chat from "./Chat"

export default function App() {
	const [conversation , setConversation ] = useState([])
	const [userPrompt , setUserPrompt] = useState('')
	async function handleFormSubmit(e) {
		console.log("Submit pressed")
		e.preventDefault()
		if(userPrompt.trim()) {
			try {
				const newConversation = [...conversation , { role : "user", content : userPrompt }]
				setConversation(newConversation)
				const chatRequest = await fetch("http://localhost:5000/chat" , {
					method : "POST",
					headers : {
						"content-type" : "application/json"
					},
					body : JSON.stringify({
						messages : newConversation
					})
				})
				const {reply} = await chatRequest.json()
				if (reply != null) 	setConversation(conversation => [...conversation , { role : "assistant",	content : reply}])
				e.target.reset()
			} catch (error) {
				console.error("Error while requesting chat ", error);	
			}
		}
	}
	return (
		<div className="chat-box">
			<div className="messages">
				<Chat messages={conversation} />
			</div>
			<form onSubmit={(e) => handleFormSubmit(e)} >
				<input 
					type="text" 
					onChange={(e) => setUserPrompt(e.target.value)} 
					placeholder="Enter the message"
				/>
				<input type="submit" value={'➤'}/>
			</form>
		</div>
	)
}