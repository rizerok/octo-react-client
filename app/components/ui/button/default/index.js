import React from 'react';

import style from './default-button.styl';

const ButtonDefault = (props) => (
    <button className={style.button} {...props}>
        <span>{props.children}</span>
    </button>
);

export default ButtonDefault;