const initialState = {
    open:false,
    options:null,
    Component:null
};

export default function(state = initialState,action){
    switch(action.type){
        case 'MODAL_OPEN':{
            console.log('action',action.payload.Component);
            return {
                ...state,
                open:true,
                Component:action.payload.Component,
                options:action.payload.options
            };
        }
        case 'MODAL_CLOSE':{
            return  {
                ...state,
                open:false,
                Component:null,
                options:null
            };
        }
    }
    return state;
}