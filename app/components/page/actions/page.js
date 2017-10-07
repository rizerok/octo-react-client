import {
    currentStateRequest,
    currentStateReceive,
    currentStateStartChange,
    currentStateFinishChange
} from 'components/app/actions/current-state';
import { getStaticBlocks } from  './static-block';
import { getPageGallery } from  './page-gallery';
import { getWidgets } from  './widget';

export const getPage = (slug) => (dispatch,getState) => {//actions creator
    //always
    dispatch(currentStateStartChange());
    //debugger;
    //find in cache
    const store = getState();
    let page = store.pages.list && store.pages.list.find(p=>p.slug===slug);
    if(page){
        dispatch(currentStateFinishChange());
        return page;
    }
    //if no find - fetch
    dispatch(currentStateRequest());
    dispatch({//action
        type:'PAGE_REQUEST',
        payload:{
        //    page
        }
    });
    
    return fetch(`/api/pages/items/${slug}/`,{
        method:'GET'
    })
        .then((resp)=>resp.ok
            ?resp.json().then(page =>
                new Promise((resolve) => {
                    Promise.all([
                        dispatch(getStaticBlocks(page.db_info)),
                        dispatch(getPageGallery(page.db_info)),
                        dispatch(getWidgets(page.db_info))
                    ])
                        .then(pageData => {
                            //https://github.com/acdlite/flux-standard-action
                            dispatch({//action
                                type:'PAGE_SUCCESS',
                                payload:{
                                    page
                                }
                            });
                            resolve(resp);
                        });
                })
            )
            :(() => {
                const {status,statusText} = resp;
                dispatch({//action
                    type:'PAGE_ERROR',
                    payload:{
                        // status,
                        // statusText
                    }
                });
                return resp;
            })()
        ).then(resp=>{
            dispatch(currentStateReceive(resp));
            //end
            dispatch(currentStateFinishChange());
        });
};
