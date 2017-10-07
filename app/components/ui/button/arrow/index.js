import React from 'react';
import classnames from 'classnames';

import style from './ui-button-arrow.styl';

const UiButtonArrow = (props) => (
    <button className={classnames(
    style.button,
    {
        [style.left]:props.direction === 'left',
        [style.right]:props.direction === 'right'
    })}
            disabled={props.disabled}
            onClick={props.evFn}>
        <span className={style.icon}></span>
    </button>
);

export default UiButtonArrow;