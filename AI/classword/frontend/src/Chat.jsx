export default function Chat({messages}) {
	return (
		<>
			{messages.length > 0 && messages.map((message , index) => (
					<div key={index} className={`message ${message.role == "user" ? 'user-message' : 'assistant-message'}`}>
						<strong>
							{`${message.role == "user" ? "You" : "Assistant"}`}
						</strong>
						 <p className="reply">{message.content}</p>
					</div>
				)
				)}
		</>
	)
}