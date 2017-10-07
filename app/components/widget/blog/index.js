import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Widget from '../classes';
import style from './widget-blog.styl';

import UiButtonGhostGreen from 'components/ui/button/ghost-green';
import WidgetTopPart from '../top-part';

import { getBlogList } from 'components/blog/actions/blog';

class WidgetBlog extends Widget.Default{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.getBlogList();
    }
    render(){
        const button = (<UiButtonGhostGreen>Все записи</UiButtonGhostGreen>);
        return (
        <div className={style.container}>
            <WidgetTopPart {...{...this.props,button}} />
            <div className="cnr-main">
                <div className={style.container}>
                    <div className="row">
                    {this.props.items.map((blog,i)=>(
                            <div className="col col--xxs-12 col--md-6" key={i}>
                                
                                <div className={style.item}>
                                    <div className={style.title}>
                                        <span>{blog.name}</span>
                                    </div>
                                    <div className={style.description}>
                                        <span>{blog.note}</span>
                                    </div>
                                    
                                </div>
                                
                            </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>

        );
    }
}

export default connect(
    state => {
        let {list} = state.blog;

        let items = list.items
            .sort((a,b)=>new Date(a.public_date)-new Date(b.public_date))
            .slice(0,2);

        console.log('items',items);

        return {
            items
        };
    },
    dispatch => ({
        getBlogList:()=>dispatch(getBlogList())
    })
)(WidgetBlog);