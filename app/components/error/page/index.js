import React from 'react';
import { connect } from 'react-redux';
import { currentStateReceive } from 'components/app/actions/current-state';

class ErrorPage extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        console.log(123,this.props);
        this.props.currentStateReceive();
    }
    render(){
        console.log(this.props.statusText,this.props.status);
        return (
            <div>
                <div>{this.props.statusText} {this.props.status}</div>
            </div>
        );
    }
}

export default connect(
    ({currentState:{error}})=>error?error:{
        statusText:'Not found',
        status:''
    },
    dispatch => ({
        currentStateReceive:() => dispatch(currentStateReceive({
            ok:true
        }))
    })
)(ErrorPage);