import React, {useState} from 'react';
import './App.css';
import {answerAPI} from "./api/api";
import {Button, Container, Paper, Stack, Tooltip, Typography} from "@mui/material";
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';



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
                <Typography mt={2} variant="h5" component="h5">
                    <ThumbsUpDownIcon/> Нужен знак свышe?
                </Typography>
                <Tooltip title='Нажми для получения ответа с сервера'>
                    <Button onClick={getAnswer} variant="contained">Ну жми</Button>
                </Tooltip>
                <div>
                    <img src={image} alt=""/>
                </div>
            </Stack>
        </Container>

    );
}

export default App;
