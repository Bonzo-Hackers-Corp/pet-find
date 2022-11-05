import React from "react";
import css from './MapMarker.module.css';

function Pin(props) {
    return (
        <>
            <div className={css.imageContainer}>
                {props.image !== undefined && <img src={props.image} alt="pet" className={css.image}/>}
            </div>
            <svg x="0px" y="0px" viewBox="0 0 498.22 498.22" width="100%" height="100%" className={css.svg}>
                <g>
                    <g>
                        <g>
                            <path d="M269.061,484.131c-3.185,8.461-11.255,14.049-20.273,14.089
                                c-9.028,0.029-17.147-5.501-20.39-13.913c-44.034-114.321-132.63-261.205-132.63-330.964C95.767,68.801,164.539,0,249.12,0
                                c84.541,0,153.333,68.801,153.333,153.343C402.462,223.307,312.557,368.579,269.061,484.131z M249.12,29.164
                                c-66.32,0-120.261,53.941-120.261,120.232c0,66.33,53.941,120.3,120.261,120.3c66.3,0,120.241-53.951,120.241-120.3
                                C369.351,83.105,315.42,29.164,249.12,29.164z"/>
                        </g>
                    </g>
                </g>
            </svg>
        </>
    )
}

function MapMarker() {
    return (
        <div className={css.container}>
            <Pin />
        </div>
    )
}

export default MapMarker;