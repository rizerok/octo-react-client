const initialState = {
    list:[
        
    ]
};

export default function (state = initialState,action){
    switch(action.type){
        case 'STATIC_BLOCK_REQUEST':{
            break;
        }
        case 'STATIC_BLOCK_SUCCESS':{
            let list = [
                ...state.list,
                ...action.payload.staticBlocks
            ];
            return {
                ...state,
                list
            };
        }
    }
    return state;
}