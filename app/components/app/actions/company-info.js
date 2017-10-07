export const getCompanyInfo = () => dispatch =>{
    dispatch({
        type:'COMPANY_REQUEST'
    });
    return fetch('/api/config/')
        .then(resp=>resp.json())
        .then(data=>{
            return dispatch({
                type:'COMPANY_SUCCESS',
                payload:data
            });
        });
};