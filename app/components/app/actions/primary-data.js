import { getCompanyInfo } from './company-info';
import { getNav } from './nav';
import { currentStateReceive } from './current-state';

import store from '../store';

export const getPrimaryData = () => dispatch =>{
    dispatch({
        type:'PRIMARY_DATA_REQUEST'
    });
    return Promise.all([
        dispatch(getCompanyInfo()),
        dispatch(getNav())
    ]).then(data=>{
        const {currentState} = store.getState();
        if(!(
            (currentState.isFirstFetch && currentState.isFetching)
            || (!currentState.isFirstFetch && !currentState.isFetching)
        )){
            // dispatch(currentStateReceive({
            //     ok:false,
            //     status:'404',
            //     statusText:'Not found'
            // }));
        }
        return dispatch({
            type:'PRIMARY_DATA_SUCCESS'
        });
    });
};