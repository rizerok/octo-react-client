const initialState = {
    list:[

    ]
};

export default function (state = initialState,action){
    switch(action.type){
        case 'PAGE_GALLERY_REQUEST':{
            break;
        }
        case 'PAGE_GALLERY_SUCCESS':{
            return {
                ...state,
                list:[
                    ...state.list,
                    action.payload.gallery
                ]
            };
        }
    }
    return state;
}