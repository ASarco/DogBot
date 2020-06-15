import React from "react";
import Dog from "./components/Dog/Dog";
import './Home.css'
import Fade from "react-reveal/Fade";

const Home = ({history}) => {
    return (
        <div>
            <div className='home-dogbot-container'>
                <div className='home-dogbot-content'>
                    <Dog history={history}/>
                    <div className='home-dogbot-greeting'>
                        <Fade opposite>
                            <h1>Hola Humano!</h1>
                        </Fade>
                        <Fade opposite>
                            <label>Querés charlar?</label>
                            <label>Click sobre mi para empezar</label>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;