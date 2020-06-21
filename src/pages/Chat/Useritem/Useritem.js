import React from "react";
import './Useritem.css';
import userAvatar from '../../../assets/images/avatar.jpeg';

const Useritem = ({text}) => {
    return (
        <div className="user-item-container" >
            <div className="user-item-messages">
                {
                    text.map((t, index) =>
                        <label >{t} </label>
                    )
                }
            </div>
            <img src={userAvatar} alt="The User"/>
        </div>
    );
}

export default Useritem;