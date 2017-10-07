const initialState = {
    items:[]
};

export default function (state = initialState,action){
    switch(action.type){
        case 'SLIDER_REQUEST':{
            break;
        }
        case 'SLIDER_SUCCESS':{
            return {
                items:action.payload.items
            };
        }
        case 'SLIDER_ERROR':{
            break;
        }

    }
    return state;
}