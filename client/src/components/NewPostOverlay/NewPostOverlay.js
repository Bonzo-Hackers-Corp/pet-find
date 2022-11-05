import React from "react";
import css from './NewPostOverlay.module.css';

import { TextField } from '@mui/material';

function NewPostOverlay() {
    return (
        <div className={css.container}>
            <p>Wybierz ostatnią lokalizację</p>
            <div className={css.mapContainer}>

            </div>

            <div className={css.inputsContainer}>
                <TextField id="standard-basic" label="Imię zwierzaka" variant="standard" className={css.input}/>
                <TextField id="standard-basic" label="Opis zwierzaka" variant="standard" multiline className={css.input}/>
                <TextField id="standard-basic" label="Nagroda" variant="standard" className={css.input}/>
                <TextField id="standard-basic" label="Tytuł ogłoszenia" variant="standard" className={css.input}/>
            </div>

            <div className={css.buttonContainer}>

            </div>
        </div>
    );
}

export default NewPostOverlay;