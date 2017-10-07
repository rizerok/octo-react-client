import React from 'react';

import style from './additional.styl';

import WidgetList from 'components/widget/list';
import PageBlockType1 from '../../block/type-1';

export default class PageAdditional extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        
        let items = this.props.items.map((el,i)=>{
            let item = null;
            if(el.type==='widget'){
                item = <WidgetList item={el}></WidgetList>;
            }else{
                item = <PageBlockType1 {...el} ></PageBlockType1>;
            }
            return (
                <div key={i} className={style.socket}>
                    {item}
                </div>
            );
        });
        
        return (
            <div>
                {items}
            </div>
        );
    }
}