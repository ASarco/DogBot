import React from "react";
import Lottie from 'react-lottie'
import animationDog from './Sabueso.json'
import './Dog.css'

const Dog = ({history}) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationDog
    }

    function handleOnClick() {
        console.log("On Click")
        history.push('/chat')
    }

    return (
        <div onClick={handleOnClick} className='dog-container'>
            <Lottie options={defaultOptions} />
        </div>
    )
}

export default Dog;