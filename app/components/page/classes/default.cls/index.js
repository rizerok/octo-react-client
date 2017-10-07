import React from 'react';
import { connect } from 'react-redux';
import style from './page-default.styl';

import UiPreloader from 'components/ui/preloader';
import PageAdditional from '../../additional/default';
import PageTopPartDefault from '../../top-part/default';



class Default extends React.Component{
    constructor(props){
        super(props);

        this.style = style;
    }
    componentDidMount(){
        window.scrollTo(0,0);
    }
    get topPart(){
        return (
            <div className={this.style.socket}>
                <PageTopPartDefault
                    title={this.props.page.title}
                    description={this.props.page.content}
                    gallery={this.props.gallery}
                ></PageTopPartDefault>
            </div>
        );
    }
    get additional(){
        return (
            <div className={this.style.socket}>
                <PageAdditional items={this.props.additional}/>
            </div>
        );
    }
    get content(){
        if(this.props.page || (this.props.additional && this.props.additional.length)) {
            return (
                <div>
                    {(this.props.page.title || this.props.page.note || this.props.page.content) ? (
                        this.topPart
                    ) : null}
                    {this.props.additional && this.props.additional.length ? (
                        this.additional
                    ) : null}
                </div>
            );
        }else{
            return null;
        }
    }
    get container(){
        return (
            <div className={this.style.pageDefault}>
                {this.content}
            </div>
        );
    }

    render(){
        return this.container;
    }
}

export default Default;