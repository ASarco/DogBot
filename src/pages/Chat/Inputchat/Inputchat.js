import React from "react";
import './Inputchat.css';

const Inputchat = () => {
    return (
        <div className="input-chat-container" >
            <div className="user-item-messages">
                <form className="chatbot-chat-input-container">
                    <input placeholder="Escribí tu nombre" type="text" />
                    <button type="submit" />
                </form>

            </div>
        </div>
    );
}

export default Inputchat;