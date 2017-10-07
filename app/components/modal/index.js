import React from 'react';
import { connect } from 'react-redux';

import style from './modal.styl';
import {closeModal} from './actions';


class Modal extends React.Component{
    constructor(props){
        super(props);

        this.closeModalOnKey = this.closeModalOnKey.bind(this);
    }
    closeModalOnKey(e){
        if(e.keyCode===27){
            this.props.close();
        }
    }
    componentDidMount(){
        window.addEventListener('keydown',this.closeModalOnKey);
    }
    componentWillUnmount(){
        window.removeEventListener('keydown',this.closeModalOnKey);
    }
    render(){
        let content = null;
        const Component = this.props.Component;
        if(this.props.open){
            content = (
                <div className={style.modal}>
                    <div className={style.closeButton}
                         onClick={this.props.close}>
                        <i className={style.closeButtonIcon}></i>
                    </div>
                    <Component {...this.props.options} />
                </div>
            );
        }

        return content;
    }
}

export default connect(
    ({modal:{open,Component,options}}) => ({
        open,
        Component,
        options
    }),
    dispatch => ({
        close:()=>{dispatch(closeModal());}
    })
)(Modal);