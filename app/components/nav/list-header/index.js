import React from 'react';
import { BrowserRouter, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import style from './nav-list-header.styl';     

class NavListHeader extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let navList = null;
        if(this.props.list){
            
            navList = <ul className={style.listArea}>
                {this.props.list.map((n,i)=>(
                    <li key={i} className={classnames(
                        style.listItem,
                        {
                            [style.isParent]:n.child_menus.length
                        }
                        )}>
                        
                        
                        {(n.child_menus.length)?(//with sublevel
                            <div>
                                <NavLink
                                    to={n.url}
                                    exact={n.url==='/'}
                                    className={style.listItemTitle}>
                                    <span className={style.listItemText}>{n.name}</span>
                                    <span className={style.triangle}>{'\u25B6'}</span>
                                </NavLink>
                                <ul className={style.subList}>
                                    {n.child_menus.map((ch,i)=>(
                                        <li key={i}>
                                            <NavLink className={style.link}
                                                 to={ch.url}
                                                 exact={ch.url==='/'}
                                                 activeClassName={classnames({
                                                    [style.isActive]:this.props.active
                                                 })}>
                                                <span className={style.listItemTitle}>
                                                    <span className={style.listItemText}>{ch.name}</span>
                                                </span>
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ):(//without sublevel
                            <NavLink className={style.link}
                                     to={n.url}
                                     exact={n.url==='/'}
                                     activeClassName={classnames({
                                    [style.isActive]:this.props.active
                                 })}>
                                <span className={style.listItemTitle}>
                                    <span className={style.listItemText}>{n.name}</span>
                                </span>
                            </NavLink>
                        )}
                        
                        
                    </li>
                ))}
            </ul>;
        }
        return (
                <nav className={style.list}>
                    {navList}
                </nav>
        );
    }
}

export default withRouter(connect(
    ({primaryData:{nav:{list}}})=>({list:list.filter(n=>n.top)})
)(NavListHeader));