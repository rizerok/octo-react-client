export const getWidgets = (db_info) => (dispatch,getState) => {
    //find in cache
    const pageId = db_info[2];
    const store = getState();
    let widgets = store.widget.list && store.widget.list
        .find(w=>w.db_info.every((db,i)=>db===db_info[i]));
    if(widgets){
        return widgets;
    }
    //if no find - fetch
    dispatch({//action
        type:'WIDGET_REQUEST'
    });

    return fetch(`/api/widgets/?db_info=${db_info.join(',')}`,{
        method:'GET'
    })
        .then(resp=>resp.json())
        .then(widgets=>{
            widgets.forEach(w=>{
                w.db_info=db_info;
                w.type = 'widget';
            });
            dispatch({//action
                type:'WIDGET_SUCCESS',
                payload:{
                    widgets
                }
            });
            return widgets;
        });
};