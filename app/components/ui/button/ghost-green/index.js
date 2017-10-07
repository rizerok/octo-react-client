import React from 'react';

import style from './button-ghost.styl';

const ButtonGhostGreen = (props) => (
    <button className={style.button}>
        <span>{props.children}</span>
    </button>
);

export default ButtonGhostGreen;