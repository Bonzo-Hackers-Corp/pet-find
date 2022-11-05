import React, { useState } from "react";
import css from './NewPostOverlay.module.css';

import { TextField, Button } from '@mui/material';
import Map from "../Map/Map";
import { useSelector } from 'react-redux';
import { postPost } from "../../api/postPost";

function NewPostOverlay(props) {
    const name = useSelector(state => state.user.name);
    const surname = useSelector(state => state.user.surname);
    const phone = useSelector(state => state.user.phone);
    const [marker, setMarker] = useState({lat: 0, lng: 0});
    const [desc, setDesc] = useState("");
    const [reward, setReward] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");

    const getBase64 = file => {
        return new Promise(resolve => {
          let baseURL = "";
          let reader = new FileReader();
    
          reader.readAsDataURL(file);
          reader.onload = () => {
            baseURL = reader.result;
            resolve(baseURL);
          };
        });
    };

    const pushPost = async () => {
        const json = {
            title: title,
            author: `${name} ${surname}`,
            location: {
                longtitude: marker.lng,
                latitude: marker.lat
            },
            description: desc,
            phone_number: phone,
            reward: {
                value: reward
            },
            photo: await getBase64(image)
        }

        await postPost(json);
        props.onCancel();
    }

    return (
        <div className={css.container} style={{display: props.visible ? "block" : "none"}}>
            <p style={{marginLeft: '10px'}}>Wybierz ostatnią lokalizację</p>
            <div className={css.mapContainer}>
                <Map className={css.map} type="select" setMarker={(value) => setMarker(value)} markerSelected={marker}/>
            </div>

            <div className={css.inputsContainer}>
            <TextField id="standard-basic" label="Tytuł ogłoszenia" variant="standard" className={css.input} onChange={({target}) => setTitle(target.value)}/>
                <TextField id="standard-basic" label="Opis zwierzaka" variant="standard" multiline className={css.input} onChange={({target}) => setDesc(target.value)}/>
                <TextField id="standard-basic" label="Nagroda" variant="standard" className={css.input} onChange={({target}) => setReward(target.value)}/>
                <input type="file" className={css.fileInput} onChange={({target}) => setImage(target.files[0])}/>
            </div>

            <div className={css.buttonContainer}>
                <Button variant="contained" style={{marginLeft: '15px', marginRight: '15px'}} onClick={() => pushPost()}>Dodaj</Button>
                <Button variant="outlined" onClick={props.onCancel}>Anuluj</Button>
            </div>
        </div>
    );
}

export default NewPostOverlay;