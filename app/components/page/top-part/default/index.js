import React from 'react';
import classnames from 'classnames';

import style from './page-top-part.styl';

import RedactorDefault from 'components/redactor/default';
import GalleryDefault from 'components/gallery/default';


const PageTopPartDefault = (props) => (
    <div>
        {props.title?(
            <div className={classnames(
                'cnr-main',
                style.socket
            )}>
                <div className={style.title}>
                    <h1>{props.title}</h1>
                </div>
            </div>
        ):null}

        {props.description?(
            <div className={classnames(
                'cnr-main',
                style.socket
            )}>
                <div className={style.description}>
                    <RedactorDefault>{props.description}</RedactorDefault>
                </div>
            </div>
        ):null}

        {props.gallery && props.gallery.images.length?(
            <div className={classnames(
                'cnr-main',
                style.socket
            )}>
                <div className={style.gallery}>
                    <GalleryDefault imgs={props.gallery.images} />
                </div>
            </div>
        ):null}

    </div>
    
);

export default PageTopPartDefault;