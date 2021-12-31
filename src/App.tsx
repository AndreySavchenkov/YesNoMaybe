import React, {useState} from 'react';
import './App.css';
import {answerAPI} from "./api/api";
import {Button, Container, Stack} from "@mui/material";

function App() {

    const [image, setImage] = useState('')


    const getAnswer = async () => {
        const answer = await answerAPI.ask()
        setImage(answer.data.image)
    }


    return (
        <Container>
            <Stack direction="column"
                   justifyContent="center"
                   alignItems="center"
                   spacing={5}>
                <h1>Нужен знак свышe?</h1>
                <Button onClick={getAnswer} variant="contained">Ну жми</Button>
                <div>
                    <img src={image} alt=""/>
                </div>
            </Stack>
        </Container>

    );
}

export default App;
