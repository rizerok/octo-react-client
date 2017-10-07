import { switchAside } from 'components/nav/actions/aside';

export const currentStateStartChange = () => dispatch =>{
    //main dispatch
    dispatch({type:'CURRENT_STATE_START_CHANGE'});
    //prepare actions
    dispatch(switchAside(false));
};
export const currentStateRequest = () => dispatch =>{
    dispatch({type:'CURRENT_STATE_REQUEST'});
};
export const currentStateReceive = (resp) => dispatch =>{
    if(typeof resp === 'undefined' || resp.ok){
        dispatch({type:'CURRENT_STATE_SUCCESS'});
    }else{
        dispatch({type:'CURRENT_STATE_ERROR',payload:{
            status:resp.status,
            statusText:resp.statusText
        }});
    }
};
export const currentStateFinishChange = () => dispatch =>{
    //main dispatch
    dispatch({type:'CURRENT_STATE_FINISH_CHANGE'});
    //finish actions
    //do something
};