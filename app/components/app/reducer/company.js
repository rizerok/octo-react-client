const initialState = {
    phone:{
        content:''
    },
    company:{
        content:''
    },
};

export default function(state = initialState,action){
    switch(action.type){
        case 'COMPANY_REQUEST':{
            break;
        }
        case 'COMPANY_SUCCESS':{
            const config = {};
            action.payload.forEach((c)=>{
                config[c.name] = c;
            });
            return {
                ...config,
                ...action.payload
            };
        }    
    }
    return state;
}