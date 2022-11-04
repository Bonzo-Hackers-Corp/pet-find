import React from 'react';
import css from './TopBar.module.css';

function TopBar() {
    return (
        <div className={css.container}>
            <p className={css.appName}>PETFIND</p>
        </div>
    )
}

export default TopBar;