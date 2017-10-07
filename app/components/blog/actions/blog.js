export const getBlogList = () => (dispatch,getState) => {//actions creator
    //always
    //dispatch(currentStateStartChange());
    //find in cache
    const store = getState();

    if(store.blog.list.items.length > 0){
        //dispatch(currentStateFinishChange());
        return store.blog.list.items;
    }
    //if no find - fetch
    //dispatch(currentStateRequest());
    dispatch({//action
        type:'BLOG_LIST_REQUEST',
        payload:{
            //    page
        }
    });

    return fetch(`/api/news/items/`,{
        method:'GET'
    })
        .then((resp)=>resp.ok
            ?resp.json().then(items =>
                new Promise((resolve) => {
                    Promise.all([

                    ])
                        .then(pageData => {
                            //https://github.com/acdlite/flux-standard-action
                            dispatch({//action
                                type:'BLOG_LIST_SUCCESS',
                                payload:{
                                    items
                                }
                            });
                            resolve(resp);
                        });
                })
            )
            :(() => {
                const {status,statusText} = resp;
                dispatch({//action
                    type:'BLOG_LIST_ERROR',
                    payload:{
                        // status,
                        // statusText
                    }
                });

                return resp;
            })()
        ).then(resp=>{
            //dispatch(currentStateReceive(resp));
            //end
            //dispatch(currentStateFinishChange());
        });
};