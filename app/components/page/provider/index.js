import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

import { getPage } from '../actions/page';

import Page from '../classes';
import PageDefault from '../default';

class PageProvider extends Page.Provider{
    constructor(props){
        super(props);
        //console.log('props',props);
    }
    render(){
        return (
            <PageDefault 
                page={this.page}
                additional={this.props.additional}
                gallery={this.props.gallery}
            />
        );
    }
}

export default withRouter(connect(
    (state,ownProps) => {
        //always first, complete props, current state
        const {slug} = ownProps.match.params;

        const page = state.pages.list.find(p=>p.slug===slug);
        if(!page){
            return {
                page,
                slug,
                gallery:[],
                additional:[]
            };
        }
        
        const gallery = state.pageGallery.list
            .find(pg=>pg.db_info.every((db,i)=>db===page.db_info[i]));
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
            gallery,
            additional
        };
    },
    dispatch  => ({
        getPage: (slug) => {
            dispatch(getPage(slug));
        }
    })
)(PageProvider));