import React, {useState} from 'react';
import './App.css';
import {answerAPI} from "./api/api";

function App() {

    const [image, setImage] = useState('')


    const getAnswer = async () => {
        const answer = await answerAPI.ask()
        setImage(answer.data.image)
    }


    return (
        <div className="App">
            <h1>Нужен знак свышe?</h1>
            <button onClick={getAnswer}>Ну жми</button>
            <div>
                <img src={image} alt=""/>
            </div>
        </div>
    );
}

export default App;
