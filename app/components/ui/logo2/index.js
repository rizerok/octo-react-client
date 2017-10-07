import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'img/logo.png';
import style from './ui-logo2.styl';

const UiLogo2 = () => (
    <Link to="/" className={style.link}>
        <img className={style.logo} src={logo} alt=""/>
    </Link>
);

export default UiLogo2;