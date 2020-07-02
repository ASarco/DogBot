import React from "react";
import './Dogitem.css';
import dogAvatar from '../../../assets/images/salchichita.png';

const Dogitem = ({text}) => {
    return (
        <div className="dog-item-container">
            <img src={dogAvatar} alt="The Dog"/>
            <div className="dog-item-messages">
                {
                    text.map((t, index) =>
                            <label key={index}>{t} </label>
                    )
                }
            </div>
        </div>
    );
}

export default Dogitem;