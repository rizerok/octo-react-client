export const getSlider = () => (dispatch,getState) => {//actions creator
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
        type:'SLIDER_REQUEST',
        payload:{
            //    page
        }
    });

    return fetch(`/api/sliders/`,{
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
                                type:'SLIDER_SUCCESS',
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
                    type:'SLIDER_ERROR',
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