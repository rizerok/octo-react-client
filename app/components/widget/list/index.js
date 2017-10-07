import React from 'react';

import WidgetBlog from '../blog';

class WidgetList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        
        switch (this.props.item.name){
            case 'blog':{
                return <WidgetBlog {...this.props.item} />;
            }
        }
        
        return null;
    }
}

export default WidgetList;