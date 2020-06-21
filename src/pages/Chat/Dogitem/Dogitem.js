import React from "react";
import './Dogitem.css';
import dogAvatar from '../../../assets/images/avatar.jpeg';

const Dogitem = ({text}) => {
    return (
        <div className="dog-item-container">
            <img src={dogAvatar} alt="The Dog"/>
            <div className="dog-item-messages">
                {
                    text.map((t, index) =>
                            <label >{t} </label>
                    )
                }
            </div>
        </div>
    );
}

export default Dogitem;