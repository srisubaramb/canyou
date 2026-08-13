import ChatMessage from "./ChatMessage";

const ChatWindow = ({ messages }) => {

    return (
        <div className="chat">

            {messages.map((message, index) => (
                <ChatMessage
                    key={index}
                    message={message}
                />
            ))}

        </div>
    );
};

export default ChatWindow;