import { useState } from "react";
import "./App.css";

import { classify, summarize } from "./services/api";

import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";

const App = () => {

    const [userPrompt, setUserPrompt] = useState("");
    const [messages, setMessages] = useState([]);

    async function classifyRequest() {

        if (!userPrompt.trim()) return;

        const response = await classify(userPrompt);

        const newMessage = {
            user: userPrompt,
            type: "classify",
            result: response.result
        };

        setMessages((previous) => [
            ...previous,
            newMessage
        ]);

        setUserPrompt("");
    }

    async function summarizeRequest() {

        if (!userPrompt.trim()) return;

        const response = await summarize(userPrompt);

        const newMessage = {
            user: userPrompt,
            type: "summarize",
            result: response.result
        };

        setMessages((previous) => [
            ...previous,
            newMessage
        ]);

        setUserPrompt("");
    }

    return (
        <div className="app">

            <div className="container">

                <h1>AI Analyzer</h1>

                <ChatWindow
                    messages={messages}
                />

                <MessageInput
                    value={userPrompt}
                    onChange={(e) =>
                        setUserPrompt(e.target.value)
                    }
                    onClassify={classifyRequest}
                    onSummarize={summarizeRequest}
                />

            </div>

        </div>
    );
};

export default App;