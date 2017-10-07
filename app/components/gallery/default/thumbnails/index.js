import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import SegmentBreakpoints from 'segment-breakpoints';

import style from './gallery-default-thumbnails.styl';
import breakpoints from './breakpoints.obj';
import { openModal } from 'components/modal/actions';

import ImageModified from 'components/image/modified';
import GalleryModal from 'components/gallery/modal';

class GalleryDefaultThumbnails extends React.Component{
    constructor(props){
        super(props);

        this.imgs = this.props.imgs.slice(1);

        this.state = {
            imgCount:0,
            imgs:[],
            hiddenImgCount:0
        };

    }
    set imgCount(val){
        this.setState({
            imgCount:val,
            imgs:this.imgs.slice(0,val),
            hiddenImgCount:this.imgs.length > val
                ?this.imgs.length - val
                :0
        });
    }
    openModal(idx){
        return () => this.props.openModal(
            GalleryModal,
            {
                imgs:this.props.imgs,
                idx:idx+1//because  - this.props.imgs.slice(1);
            }
        );
    }
    componentDidMount(){
        this.sb = new SegmentBreakpoints({
            0:{
                in:()=>{
                    this.imgCount = 2;
                }
            },
            960:{
                in:()=>{
                    this.imgCount = 3;
                }
            },
            1280:{
                in:()=>{
                    this.imgCount = 5;
                }
            },
            max:true,
            min:false
        });
    }
    componentWillUnmount(){
        this.sb.destroy();
    }
    render(){
        console.log('opop2',this.state.imgs);
        console.log('props2',this.props.imgs);
        //ng-class="'gallery-default-thumbnails__socket_' + $ctrl.getVisibleCount()"
        return (
            <div className={style.thumbnails}>
                {this.state.imgs.map((img,i)=>(
                    <div className={style.socket} key={i}>
                        <div className={style.ratiobox}>
                            <div className={classnames(
                            style.socketArea,
                            'hov-block'
                            )} onClick={this.openModal(i)}>
                                
                                <ImageModified
                                    imgObj={img.image_parsed}
                                    breakpoints={breakpoints}
                                />
                                {this.state.hiddenImgCount && i === this.state.imgCount-1?(
                                    <div className={style.moreCount}>
                                        <span>+ {this.state.hiddenImgCount}</span>
                                    </div>
                                ):null}
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        );
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        openModal:(Component,props)=>dispatch(openModal(Component,props))
    })
)(GalleryDefaultThumbnails);