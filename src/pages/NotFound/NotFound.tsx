import React from 'react';
import s from './NotFound.module.scss'

const NotFound = () => {
    return (
        <h1 className={s.root}>
            <span>Ничего не найдено</span>
            <br/>
            <span>🙂</span>

        </h1>
    );
};

export default NotFound;