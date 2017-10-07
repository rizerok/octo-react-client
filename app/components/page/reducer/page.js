const initialState = {
    list:[
        
    ]
};

export default function (state = initialState,action){
    switch(action.type){
        case 'PAGE_REQUEST':{
            break;
        }
        case 'PAGE_SUCCESS':{
            let list = [...state.list];
            list.push(action.payload.page);
            return {
                ...state,
                list
            };
        }
        case 'PAGE_ERROR':{
            break;
        }
    }
    return state;
}