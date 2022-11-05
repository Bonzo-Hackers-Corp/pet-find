import React from "react";
import css from './BottomBar.module.css';

function BottomBar(props) {
    return (
        <div className={css.container}>
            <p className={css.textButton} onClick={() => console.log("test profil")}>Profil</p>
            <div className={css.addButton} onClick={props.onClickNew}>
                <p className={css.addButtonText}>+</p>
            </div>
            <p className={css.textButton} onClick={() => console.log("test mapa")}>Lista</p>
        </div>
    )
}

export default BottomBar