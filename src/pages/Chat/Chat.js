import React, {useState, useEffect, useRef} from "react";
import './Chat.css'
import Inputchat from "./Inputchat/Inputchat";
import Dogitem from "./Dogitem/Dogitem";
import Useritem from "./Useritem/Useritem";
import Select from "./Select/Select";
import {doing, aboutMe} from "../../data/Actions";
import Fade from "react-reveal/Fade";

const Chat = () => {

    let idCounter = 0;

    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const [msg, setMsg] = useState("");
    const [openSelect, setOpenSelect] = useState(false);
    const [chat, setChat] = useState([
        {
            id: 0,
            emitter: "dog",
            msg: ["Hola", "cómo te llamás?"]
        }
    ])

    const [interactions, setInteractions] = useState([]);

    useEffect(() => {
        if (chat.length === 2) {
            setTimeout(() => firstResponse(msg.msg), 500);
            setMsg({...msg, msg: ""});
            setTimeout(() => setOpenSelect(true), 600);
        }
        scrollToBottom()
        // eslint-disable-next-line
    }, [chat, interactions]);


    function firstResponse(name) {
        let newChat = {
            id: idCounter + 2,
            emitter: 'dog',
            msg: ['Como va, ' + name + '!',
                'Mi nombre es Panchito, soy un dogbot salchicha',
                'Haceme una pregunta de la lista.']
        }
        if (newChat) {
            setChat([...chat, newChat])
        }

    }
    function getMessage(value) {
        idCounter++;
        setMsg({
            id: idCounter,
            emitter: 'user',
            msg: [value]
        })

    }
    function sendMessage(e) {
        e.preventDefault();
        setChat([...chat, msg]);

    }

    let opciones = [
        {
            id: "sobreMi",
            text: "Algo sobre mi"
        },
        {
            id: "queHaces",
            text: "Qué estas haciendo?"
        }

    ]

    function handleSelectOptions(value) {
        let result;
        switch (value) {
            case 'queHaces':
                result = doing[Math.floor(Math.random() * doing.length)];
                break;
            case 'sobreMi':
                result = aboutMe[Math.floor(Math.random() * aboutMe.length)];
                break;
            default:
                console.log("No hay valores")
        }
        if (result) {
            setInteractions([...interactions, result.msg])
        }
    }

    return (
        <div className="chatbot-chat-container">
            <div className="chatbot-chat-content">
                <div className="chatbot-chat">
                    <div className="chatbot-chat-container-body">
                        {
                            chat.map((message, index) =>
                                message.emitter === "dog" ?
                                    <Fade left>
                                        <Dogitem key={index} text={message.msg}/>
                                    </Fade>
                                    :
                                    <Fade right>
                                        <Useritem key={index} text={message.msg}/>
                                    </Fade>
                            )
                        }
                        {
                            openSelect &&
                            <Fade left>
                                <Select options={opciones} handleSelectOptions={handleSelectOptions}/>
                            </Fade>
                        }
                        {
                            interactions.length > 0 &&
                            interactions.map((interaction, index) =>
                                <>
                                    <Fade left>
                                        <Dogitem key={index} text={interaction}/>
                                    </Fade>
                                    <Fade right>
                                        <Select key={index} handleSelectOptions={handleSelectOptions}
                                                options={opciones}/>
                                    </Fade>
                                </>
                            )
                        }
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="chatbot-chat-container-input">
                        <Inputchat getMessage={getMessage} sendMessage={sendMessage} msg={msg} chat={chat}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;