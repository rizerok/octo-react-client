import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import SegmentBreakpoints from 'segment-breakpoints';

import style from './gallery-default-thumbnails.styl';
import breakpoints from './breakpoints.obj';
import { openModal } from 'components/modal/actions';

import ImageModified from 'components/image/modified';
import GalleryModal from 'components/gallery/modal';

class GalleryInline extends React.Component{
    constructor(props){
        super(props);

        this.imgs = this.props.imgs;

        this.state = {
            imgCount:0,
            imgs:[],
            hiddenImgCount:0
        };

    }
    set imgCount(val){
        //console.log('this.imgs',this.imgs);
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
                idx:idx
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
            700:{
                in:()=>{
                    this.imgCount = 3;
                }
            },
            960:{
                in:()=>{
                    this.imgCount = 4;
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
        return (
            <div className={style.thumbnails}>
                <div className="row">

                    {this.state.imgs.map((img,i)=>(
                        <div className="col col--xxs-6 col--xs-4 col--md-3 col--lg-2" key={i}>
                            <div className={classnames(
                                style.socket,
                                'hov-block'
                                )} key={i}>
                                <div className={style.ratiobox}>
                                    <div className={classnames(
                                style.socketArea,
                                )} onClick={this.openModal(i)}>

                                        <ImageModified
                                            imgObj={img.image_parsed}
                                            breakpoints={breakpoints}
                                            className={classnames({
                                                [style.bordered]:!(this.state.hiddenImgCount && i === this.state.imgCount-1)
                                            })}
                                        />
                                        {this.state.hiddenImgCount && i === this.state.imgCount-1?(
                                            <div className={style.moreCount}>
                                                <span>+ {this.state.hiddenImgCount}</span>
                                            </div>
                                        ):null}

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

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
)(GalleryInline);