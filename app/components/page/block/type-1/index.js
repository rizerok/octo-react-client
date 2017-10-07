import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import style from './page-block-type1.styl';
import breakpoints from './image-breakpoints.obj';
import { openModal } from 'components/modal/actions';

import RedactorDefault from 'components/redactor/default';
import ImageModified from 'components/image/modified';
import GalleryModal from 'components/gallery/modal';

class PageBlockType1 extends React.Component{
    constructor(props){
        super(props);
        
        this.imgs = [];
        
        for(let i=1;i<5;i++){
            let img = this.props[`image${i}_parsed`];
            img && this.imgs.push(img);
        }

        this.openModal = this.openModal.bind(this);
    }
    openModal(idx){

        return () => this.props.openModal(
            GalleryModal,
            {
                imgs:this.imgs.map(img=>({image_parsed:img})),
                idx:idx
            }
        );
    }
    render(){
        return (
            <div className="cnr-main">
                <div className={style.block}>
                    <div className="row">
                        {/*HEADER*/}
                        <div className={classnames(
                            'col col--xxs-12 col--lg-3',
                            style.header,
                            {
                                [style.isFilled]:this.props.title
                            }
                        )}>
                            <div className={style.title}>
                                <h2>{this.props.title}</h2>
                            </div>
                        </div>
                        {/*ANNOUNCE*/}
                        <div className={classnames(
                            style.note,
                            'col col--xxs-12 col--md-3 col--lg-2',
                            {
                                [style.isFilled]:this.props.announce
                            }
                        )}>
                            <span>{this.props.announce}</span>
                        </div>
                        {/*REDACTOR*/}
                        <div className={classnames(
                            'col col--xxs-12 col--md-9 col--lg-7',
                            style.redactor,
                            {
                                [style.isFilled]:this.props.content
                            }
                        )}> 
                            <RedactorDefault>
                                {this.props.content}
                            </RedactorDefault>
                        </div>
                        
                        {/*LAST BLOCK*/}
                        {this.imgs.length?(
                            <div className={classnames(
                                style.lastBlock,
                                'col col--xxs-12'
                            )}>
                                {/*IMAGES*/}
                                <div className={style.imgSet}>
                                    <div className={classnames(
                                        'row row--md-top'
                                    )}>
                                        {this.imgs.map((img,i) =>
                                            <div key={i} className={classnames(
                                            'col col--xxs-6 col--md-3',
                                            {
                                                ['col--lg-offset-3']:this.imgs.length < 4 && i === 0
                                            }
                                            )}>
                                                <div onClick={this.openModal(i)}>
                                                    <ImageModified
                                                        alt=""
                                                        imgObj={img}
                                                        className={classnames(
                                                            style.imgSetItem,
                                                            'hov-block',
                                                        )}
                                                        breakpoints={breakpoints}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ):null}

                        

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
)(PageBlockType1);