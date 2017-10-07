export const getPageGallery = (db_info) => (dispatch,getState) => {
    //find in cache
    const store = getState();
    let gallery = store.gallery && store.gallery.list
        .find(p=>p.db_info.every((db,i)=>db===db_info[i])); 

    if(gallery){
        return gallery;
    }
    //if no find - fetch
    dispatch({//action
        type:'PAGE_GALLERY_REQUEST'
    });

    return fetch(`/api/gallery/?db_info=${db_info.join(',')}`,{
        method:'GET'
    })
        .then(resp=>resp.json())
        .then(images=>{
            gallery = {
                db_info,
                images:images.sort((a,b)=>a.order-b.order)
            };
            dispatch({//action
                type:'PAGE_GALLERY_SUCCESS',
                payload:{
                    gallery
                }
            });
            return gallery;
        });
};