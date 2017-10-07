export const openModal = (Component,options) => dispatch => {
    console.log('dispatch',Component,options);
    return dispatch({type:'MODAL_OPEN',payload:{
        Component:Component,
        options:options
    }});
};
export const closeModal = () => dispatch => {
    return dispatch({type:'MODAL_CLOSE'});
};