import React from "react";
import './Inputchat.css';

const Inputchat = ({sendMessage, getMessage, msg, chat}) => {
    return (
        <div className="input-chat-container" >
            <div className="user-item-messages">
                <form className="chatbot-chat-input-container" onSubmit={(e) => sendMessage(e)}>
                    <input disabled={ chat.length >= 3} value={msg.msg}
                           placeholder={chat.length >= 3 ? "Ya no se puede escribir" : "Escribí tu nombre"}
                           type="text" onChange={ (e) => getMessage(e.target.value)}/>
                    <button type="submit" />
                </form>

            </div>
        </div>
    );
}

export default Inputchat;