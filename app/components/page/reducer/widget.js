const initialState = {
    list:[
        
    ]
};

export default function (state = initialState,action){
    switch(action.type){
        case 'WIDGET_REQUEST':{
            break;
        }
        case 'WIDGET_SUCCESS':{
            let list = [
                ...state.list,
                ...action.payload.widgets
            ];
            return {
                ...state,
                list
            };
        }
    }
    return state;
}