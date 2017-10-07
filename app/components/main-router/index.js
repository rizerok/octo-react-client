import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
    Route,
    Switch,
} from 'react-router-dom';

import HomeProvider from 'components/home/provider';
import AboutProvider from 'components/about/provider';
import ErrorPage from 'components/error/page';
import UiPreloader from 'components/ui/preloader';

import style from './main-router.styl';

import PageRouter from 'components/page/router';

class MainRouter extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillReceiveProps(next){
        if(next.currentState.error){
            this.props.history.push('/error');
        }
    }
    render(){
        const {isFetching,isFirstFetch} = this.props.currentState;
        return (
            <div className={style.container}>
                <Switch>
                    <Route exact path="/" component={HomeProvider} />
                    <Route path="/about" component={AboutProvider} />
                    <Route path="/page/" component={PageRouter} />
                    <Route component={ErrorPage} />
                </Switch>
                {isFetching && !isFirstFetch?(
                    <UiPreloader />
                ):null}
            </div>
        );
    }
}

export default withRouter(connect(
    ({currentState},ownProps)=>{
        return {
            currentState
        };
    }
)(MainRouter));