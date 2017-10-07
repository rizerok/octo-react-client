import React from 'react';
import { Link } from 'react-router-dom';

import style from './ui-logo.styl';
import logo from 'img/logo.png';

const UiLogo = (props) => (
    <Link className={style.link} to="/"> 
        <img className={style.logo} src={logo} alt=""/>
    </Link>
);

export default UiLogo;