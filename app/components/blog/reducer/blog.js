const initialState = {
    list:{
        items:[],
        displayed:20,
        increment:20
    },
    props:[

    ],
    propValues:[

    ]
};

export default function (state = initialState,action){
    switch(action.type){
        case 'BLOG_LIST_REQUEST':{
            break;
        }
        case 'BLOG_LIST_SUCCESS':{
            return {
                ...state,
                list:{
                    ...state.list,
                    items:action.payload.items
                }
            };
        }
        case 'BLOG_LIST_ERROR':{
            break;
        }

    }
    return state;
}