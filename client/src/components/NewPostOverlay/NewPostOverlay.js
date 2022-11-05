import React, { useState } from "react";
import css from './NewPostOverlay.module.css';

import { TextField, Button } from '@mui/material';
import Map from "../Map/Map";

function NewPostOverlay(props) {
    const [marker, setMarker] = useState({lat: 0, lng: 0});
    const [petName, setPetName] = useState("");
    const [desc, setDesc] = useState("");
    const [reward, setReward] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");

    return (
        <div className={css.container} style={{display: props.visible ? "block" : "none"}}>
            <p style={{marginLeft: '10px'}}>Wybierz ostatnią lokalizację</p>
            <div className={css.mapContainer}>
                <Map className={css.map} type="select" setMarker={(value) => setMarker(value)} markerSelected={marker}/>
            </div>

            <div className={css.inputsContainer}>
                <TextField id="standard-basic" label="Imię zwierzaka" variant="standard" className={css.input}/>
                <TextField id="standard-basic" label="Opis zwierzaka" variant="standard" multiline className={css.input}/>
                <TextField id="standard-basic" label="Nagroda" variant="standard" className={css.input}/>
                <TextField id="standard-basic" label="Tytuł ogłoszenia" variant="standard" className={css.input}/>
                <input type="file" className={css.fileInput}/>
            </div>

            <div className={css.buttonContainer}>
                <Button variant="contained" style={{marginLeft: '15px', marginRight: '15px'}}>Dodaj</Button>
                <Button variant="outlined" onClick={props.onCancel}>Anuluj</Button>
            </div>
        </div>
    );
}

export default NewPostOverlay;