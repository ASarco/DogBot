import React, {useState} from "react";
import './Chat.css'
import Inputchat from "./Inputchat/Inputchat";
import Chatitem from "./Chatitem/Chatitem";


const Chat = () => {

    const [msg, setMsg] = useState();
    const [chat, setChat] = useState([
            {
                id: 0,
                emitter: "dog",
                msg: ["Hola", "cómo te llamás?"]
            },
            {
                id: 1,
                emitter: "user",
                msg: ["Me llamo Pirulo"]
            }
        ])

    return (
        <div className="chatbot-chat-container">
            <div className="chatbot-chat-content">
                <div className="chatbot-chat">
                    <div className="chatbot-chat-container-body">
                        {
                            chat.map((message, index) =>
                                <Chatitem key={index} text={message.msg} emitter={message.emitter} />
                            )
                        }
                    </div>
                    <div className="chatbot-chat-container-input">
                        <Inputchat/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;