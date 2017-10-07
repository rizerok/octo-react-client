import React from 'react';

import style from './redactor-default.styl';

const RedactorDefault = (props) => (
    <div className={style.redactorDefault}
         dangerouslySetInnerHTML={{__html: props.children}}>
    </div>
);

export default RedactorDefault;