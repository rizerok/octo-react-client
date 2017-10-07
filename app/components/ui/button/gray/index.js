import React from 'react';

import style from './button-gray.styl';

const UiButtonGray = (props) => (
    <button className={style.button}>
        <span>{props.children}</span>
    </button>
);

export default UiButtonGray;