import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import style from './gallery-default.styl';
import breakpoints from './main-img-breakpoints.obj';
import { openModal } from 'components/modal/actions';

import ImageModified from 'components/image/modified';
import GalleryDefaultThumbnails from './thumbnails';
import GalleryModal from 'components/gallery/modal';


class GalleryDefault extends React.Component{
    constructor(props){
        super(props);

        this.openModal = this.openModal.bind(this);
    }
    openModal(){
        this.props.openModal(
            GalleryModal,
            {
                imgs:this.props.imgs,
                idx:0//because  - this.props.imgs.slice(1);
            }
        );
    }
    render(){
        console.log('pr',this.props);
        return (
            <div>
                <div className={classnames(
                    'row',
                    style.body
                )}>
                    <div className={classnames(
                        'col ',
                        style.mainContainer,
                        {
                            'col--xxs-8':this.props.imgs.length > 1,
                            'col--md-9':this.props.imgs.length > 1,
                            'col--lg-10':this.props.imgs.length > 1,
                            'col--xxs-12':this.props.imgs.length === 1
                        }
                    )}>
                        <div className={style.mainContainerRatiobox}>
                            <div className={classnames(
                                'hov-block',
                                style.mainContainerArea
                            )}
                                 onClick={this.openModal}>
                                <ImageModified
                                    imgObj={this.props.imgs[0].image_parsed}
                                    breakpoints={breakpoints}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={classnames(
                        'col col--xxs-4 col--md-3 col--lg-2',
                        style.thumbnails
                    )}>
                        <div className={style.thumbnailsArea}>
                            {/* THUMBNAILS */}
                            <GalleryDefaultThumbnails 
                                imgs={this.props.imgs}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        openModal:(Component,props)=>dispatch(openModal(Component,props))
    })
)(GalleryDefault);