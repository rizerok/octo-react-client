const initialData = {
    isFirstFetch:true,
    isFetching:false,
    error:false
};

export default function(state = initialData,action){
    switch(action.type){
        case 'CURRENT_STATE_START_CHANGE':{
            return state;
        }
        case 'CURRENT_STATE_REQUEST':{
            return {
                ...state,
                isFetching:true
            };
        }
        case 'CURRENT_STATE_ERROR':{
            const {status,statusText} = action.payload;
            return {
                ...state,
                isFirstFetch:false,
                isFetching:false,
                error:{
                    status,
                    statusText
                }
            };
        }
        case 'CURRENT_STATE_SUCCESS':{
            return {
                ...state,
                isFirstFetch:false,
                isFetching:false,
                error:false
            };
        }
        case 'CURRENT_STATE_FINISH_CHANGE':{
            return state;
        }
    }
    return state;
}