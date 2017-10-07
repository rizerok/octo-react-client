import React from 'react';
import classnames from 'classnames';

import style from './gallery-modal.styl';
import breakpoints from './breakpoints';

import UiButtonArrow from 'components/ui/button/arrow';
import ImageModified from 'components/image/modified';
import UiPreloader from 'components/ui/preloader';

class GalleryModal extends React.Component{
    constructor(props){
        super(props);
        //console.log('props',props);
        this._loadId = 0;
        this._preloaderDelay = 500;

        this.state = {
            loadId:this.loadId,//start
            loading:true,
            preloader:false,
            imgs:this.props.imgs,
            idx:this.props.idx,
            currentImg:null//this.props.imgs[this.props.idx]
        };

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.handleLoadImage = this.handleLoadImage.bind(this);
        this.keyHandler = this.keyHandler.bind(this);
    }
    get loadId(){
        //loadId need for check - which loading is finished
        //next id for loading
        return this._loadId++;
    }
    keyHandler(e){
        if(e.keyCode===37){
            this.prev();
        }
        if(e.keyCode===39){
            this.next();
        }
    }
    handleLoadImage(loadedId){//this receive on start
        //loaded id persists then compared with current load id
        return ()=>{
            if(this.state.loadId===loadedId){
                this.removePreloader();
                this.setState({
                    ...this.state,
                    loading:false
                });
            }
        };
    }
    setPreloader(){
        this.removePreloader();
        this._preloaderTimeout = setTimeout(()=>{
            this.setState({
                ...this.state,
                preloader:true
            });
        },this._preloaderDelay);
    }
    removePreloader(){
        clearTimeout(this._preloaderTimeout);
        this.setState({
            ...this.state,
            preloader:false
        });
    }
    next(){
        if(this.state.idx < this.state.imgs.length-1){
            this.setPreloader();
            this.setState({
                ...this.state,
                loading:true,
                loadId:this.loadId,
                idx:++this.state.idx,
                currentImg:this.state.imgs[this.state.idx]
            });
        }
    }
    prev(){
        if(this.state.idx > 0){
            this.setPreloader();
            this.setState({
                ...this.state,
                loading:true,
                loadId:this.loadId,
                idx:--this.state.idx,
                currentImg:this.state.imgs[this.state.idx]
            });
        }
    }
    componentDidMount(){
        this.setPreloader();
        this.setState({
            ...this.state,
            loading:true,
            loadId:this.loadId,
            currentImg:this.state.imgs[this.state.idx]
        });
        window.addEventListener('keydown',this.keyHandler);
    }
    componentWillUnmount(){
        window.removeEventListener('keydown',this.keyHandler);
    }
    render(){
        return (
            <div className={style.gallery}>
                <div className={classnames(
                    style.body
                )}>
                    <div className={classnames(
                        'col--xxs-12 col--md-10 col--lg-8',
                        style.bodyArea
                    )}>
                        <div className={classnames(
                            style.arrow,
                            style.arrowLeft,
                        )}>
                            <UiButtonArrow 
                                direction="left"
                                evFn={this.prev}
                                disabled={this.state.idx === 0}
                            />
                        </div>
                        
                        <div className={style.preloader}
                            style={{opacity:(this.state.loading && this.state.preloader)?1:0}}>
                            <UiPreloader />
                        </div>

                        <div
                            className={style.socketImage}
                            style={{opacity:(this.state.loading)?0:1}}
                        >
                            {this.state.currentImg?(
                                <ImageModified
                                    imgObj={this.state.currentImg.image_parsed}
                                    breakpoints={breakpoints}
                                    className={style.image}
                                    onLoad={this.handleLoadImage(this.state.loadId)}
                                />
                            ):null}

                        </div>


                        <div className={classnames(
                            style.arrow,
                            style.arrowRight,
                        )}>
                            <UiButtonArrow
                                direction="right"
                                evFn={this.next}
                                disabled={this.state.idx === this.state.imgs.length-1}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GalleryModal;