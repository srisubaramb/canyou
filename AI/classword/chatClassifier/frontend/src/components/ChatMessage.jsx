const ChatMessage = ({ message }) => {

    return (
        <div className="message">

            <div className="user-message">
                <strong>You</strong>
                <p>{message.user}</p>
            </div>

            <div className="ai-message">

                <strong>AI</strong>

                {message.type === "classify" && (
                    <>
                        <p>
                            <strong>Category:</strong>{" "}
                            {message.result.category}
                        </p>

                        <p>
                            <strong>Priority:</strong>{" "}
                            {message.result.priority}
                        </p>

                        <p>
                            <strong>Confidence:</strong>{" "}
                            {message.result.confidence}
                        </p>
                    </>
                )}

                {message.type === "summarize" && (
                    <p>
                        <strong>Summary:</strong>{" "}
                        {message.result}
                    </p>
                )}

            </div>

        </div>
    );
};

export default ChatMessage;