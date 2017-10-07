export const getNav = () => dispatch =>{
    dispatch({
        type:'NAV_REQUEST'
    });
    return fetch('/api/simple_menu/')
        .then(resp=>resp.json())
        .then(data=>{
            data.forEach(d=>{
                d.url = d.url[0]!=='/'?'/'+d.url:d.url;
                d.child_menus.forEach(cm=>{
                    cm.url = cm.url[0]!=='/'?'/'+cm.url:cm.url;
                });
            });
            return dispatch({
                type:'NAV_SUCCESS',
                payload:data
                    .sort((a,b)=>a.order-b.order)
            });
        });
};