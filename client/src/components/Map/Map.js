import React from "react";
import css from './Map.module.css';
import { useEffect, useState } from "react";

import GoogleMapReact from 'google-map-react';
import MapMarker from "../MapMarker/MapMarker";
import { fetchPosts } from '../../redux/postsSlice';
import { useDispatch } from 'react-redux';

function Map() {
    const [position, setPosition] = useState({lat: 52.43205668262439, lng: 17.072698615344446});
    const [zoom, setZoom] = useState(15);
    const dispatch = useDispatch();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setPosition({
                lat: position.coords.latitude, 
                lng: position.coords.longitude
            });
        });

        dispatch(fetchPosts());
    }, [dispatch]);

    const mapOptions = (maps) => {
        return {
            disableDefaultUI: true,
            styles: [
                { 
                    featureType: "poi", 
                    elementType: "labels", 
                    stylers: [ {"visibility": "off"} ] 
                },
                { 
                    featureType: "transit", 
                    elementType: "labels", 
                    stylers: [ {"visibility": "off"} ] 
                },
                { 
                    featureType: "road", 
                    elementType: "labels", 
                    stylers: [ {"visibility": "off"} ] 
                }
            ]
        };
    }

    return (
        <div className={css.container}>
            <GoogleMapReact
                bootstrapURLKeys={{ 
                    key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
                    language: 'pl',
                    region: 'pl',
                    libraries: []
                }}
                center={position}
                zoom={zoom}
                options={mapOptions}
            >
                <MapMarker lat={position.lat} lng={position.lng}/>
            </GoogleMapReact>
        </div>
    )
}

export default Map;
