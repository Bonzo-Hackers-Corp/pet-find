import React from "react";
import css from './Map.module.css';
import { useEffect, useState } from "react";

import GoogleMapReact from 'google-map-react';
import MapMarker from "../MapMarker/MapMarker";
import { useSelector } from 'react-redux';

function Map(props) {
    const [position, setPosition] = useState({lat: 52.43205668262439, lng: 17.072698615344446});
    const zoom = 15;
    const posts = useSelector(state => state.posts.posts);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setPosition({
                lat: position.coords.latitude, 
                lng: position.coords.longitude
            });
        });
    }, []);

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
        <div className={`${css.container} ${props.className}`}>
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
                onClick={({x, y, lat, lng, event}) => { if (props.type === 'select') props.setMarker({x, y, lat, lng, event});}}
            >
                {props.type === 'select' ?
                    props.markerSelected !== undefined ? <MapMarker lat={props.markerSelected.lat} lng={props.markerSelected.lng}/> : null
                    : posts.map((post, index) => {
                        return (
                            <MapMarker image={post.image} lat={post.location.latitude} lng={post.location.longtitude} key={`marker-${index}`}/>
                        );
                    })
                }
            </GoogleMapReact>
        </div>
    )
}

export default Map;
