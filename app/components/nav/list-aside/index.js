import React from 'react';
import { BrowserRouter, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import style from './nav-list-aside.styl';

class NavListAside extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let navList = null;
        if(this.props.list){
            navList = <ul className={style}>
                {this.props.list.map((n,i)=>(
                    <li key={i} className={style.listItem}>
                        <NavLink className={style.link}
                                 to={n.url}
                                 exact={n.url==='/'}
                                 activeClassName={classnames({
                                    [style.isActive]:this.props.active
                                 })}>
                            <span>{n.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>;
        }

        return (

            <nav className={style.navDropDownList}>
                {navList}
                <div className={style.address}>
                    <pre>
                         {this.props.address?this.props.address.content:null}
                    </pre>
                </div>
            </nav>

        );
    }
}

export default withRouter(connect(
    ({primaryData:{nav:{list},company:{address}}}) => ({list,address})
)(NavListAside));