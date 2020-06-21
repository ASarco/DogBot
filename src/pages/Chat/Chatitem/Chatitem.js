import React from "react";
import './Chatitem.css';
import dogAvatar from '../../../assets/images/avatar.jpeg';
import userAvatar from '../../../assets/images/avatar.jpeg';

const Chatitem = ({text, emitter}) => {

    return (
        <div className={emitter + "-item-container"}>
            {
                emitter === "dog" ?
                <img src={dogAvatar} alt="The Dog"/> : ""
            }
            <div className={emitter + "-item-messages"}>
                {
                    text.map((t, index) =>
                        <label key={index}>{t} </label>
                    )
                }
            </div>
            {
                emitter === "user" ?
                    <img src={userAvatar} alt="The User"/> : ""
            }
        </div>
    );
}

export default Chatitem;