import React from 'react';
import { BrowserRouter, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import style from './nav-list-footer.styl';

class NavListFooter extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let navList = null;
        if(this.props.list){
            navList = <ul className={style.list}>
                {this.props.list.map((n,i)=>(
                    <li key={i} className={style.listItem}>
                        <NavLink className={style.listItemLink}
                                 to={n.url}
                                 exact={n.url==='/'}
                                 activeClassName={classnames({
                                    [style.isActive]:this.props.active
                                 })}>
                            <span className={style.listItemText}>{n.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>;
        }
        return (
            <nav className={style.navDropDownList}>
                {navList}
            </nav>
        );
    }
}

export default withRouter(connect(
    ({primaryData:{nav:{list}}})=>({list:list.filter(n=>n.bottom)})
)(NavListFooter));