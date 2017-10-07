import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

import { getPage } from 'components/page/actions/page';
import { getSlider } from 'components/slider/actions/slider';

import Page from 'components/page/classes';
import Home from '../index';


class HomeProvider extends Page.Provider{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        super.componentWillMount();
        this.props.getSlider();
    }
    render(){
        return (
            <Home page={this.page}
                  additional={this.props.additional}
                  slider={this.props.slider}
            />
        );
    }
}

export default withRouter(connect(
    (state,ownProps) => {
        //always first
        const slug = 'index';
        const {list} = state.pages;

        const page = state.pages.list.find(p=>p.slug===slug);

        if(!page){
            return {
                page,
                slug,
                //gallery:[],
                additional:[]
            };
        }

        // const gallery = state.pageGallery.list
        //     .find(pg=>pg.db_info.every((db,i)=>db===page.db_info[i]));
        const widgets = state.widget.list
            .filter(w=>w.db_info.every((db,i)=>db===page.db_info[i]));
        const staticBlocks = state.staticBlock.list
            .filter(sb=>sb.db_info.every((db,i)=>db===page.db_info[i]));
        const additional = [
            ...staticBlocks,
            ...widgets
        ].sort((a,b)=>a.order-b.order);

        return {
            page,
            slug,
            slider:state.slider.items,
            additional
        };
    },
    dispatch  => ({
        getPage: (slug) => {
            dispatch(getPage(slug));
        },
        getSlider:()=>dispatch(getSlider())
    })
)(HomeProvider));