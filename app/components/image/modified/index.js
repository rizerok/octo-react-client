import React from 'react';
import SegmentBreakpoints from 'segment-breakpoints';

// imgObj
// alt
// breakpoints

class ImageModified extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            alt:'',
            src:null,
            brs:{
                min:this.props.breakpoints.min,
                max:this.props.breakpoints.max
            }
        };

        this.img = null;

        this.setBreakpoints(this.props);
    }
    setBreakpoints(props){
        console.log(props.imgObj.name);
        Object.keys(props.breakpoints)
            .forEach(br=>{
                if(br!=='max' && br!=='min'){
                    this.state.brs[br] = {};
                    this.state.brs[br].in = ()=>{
                        console.log('br init');
                        this.setState({
                            ...this.state,
                            src:this.getSrc(
                                props.imgObj,
                                props.breakpoints[br].img
                            )
                        });
                    };
                }
            });
    }
    updateImg(props){
        this.setState({
            ...this.state,
            alt:'',
            brs:{
                min:props.breakpoints.min,
                max:props.breakpoints.max
            }
        });
        //set breakpoints functions
        this.setBreakpoints(props);
        //init
        this.sb = new SegmentBreakpoints(this.state.brs);
    }
    componentDidMount(){
        this.sb = new SegmentBreakpoints(this.state.brs);
        //add event listener and don't use destroy method on unmount.
        //when image remove, listener destroy yourself
        this.img.addEventListener('load',()=>{
            if('onLoad' in this.props){
                this.props.onLoad();
            }
        });
    }
    componentWillUnmount(){
        this.sb.destroy();
    }
    componentWillReceiveProps(next){
        if(
            next.imgObj!==this.props.imgObj
            || next.breakpoints!==this.props.breakpoints
            || next.alt!==this.props.alt
        ){
            this.sb.destroy();
            this.updateImg(next);
        }
    }
    getSrc({prefix,name,ext},geometry){
        return prefix + name + geometry + ext;
    }
    render(){
        
        return (
            <img
                ref={img=>{this.img=img;}}
                src={this.state.src}
                alt={this.props.alt}
                className={this.props.className}
            />
        );
    }
}

export default ImageModified;