export const getStaticBlocks = (db_info) => (dispatch,getState) => {
    //find in cache
    const store = getState();
    let staticBlocks = store.staticBlock.list && store.staticBlock.list
        .find(p=>p.db_info.every((db,i)=>db===db_info[i]));
    if(staticBlocks){
        return staticBlocks;
    }
    //if no find - fetch
    dispatch({//action
        type:'STATIC_BLOCK_REQUEST'
    });

    return fetch(`/api/static_blocks/?db_info=${db_info.join(',')}`,{
        method:'GET'
    })
        .then(resp=>resp.json())
        .then(staticBlocks=>{
            staticBlocks.forEach(sb=>{
                sb.db_info=db_info;
                sb.type = 'block';
            });
            dispatch({//action
                type:'STATIC_BLOCK_SUCCESS',
                payload:{
                    staticBlocks
                }
            });
            return staticBlocks;
        });
};