import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

import URLSearchParams from 'url-search-params';
if(!('URLSearchParams' in window)){
    window.URLSearchParams = URLSearchParams;
}

import 'styles/style.styl';

import App from 'components/app';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);