import React from 'react';
import classnames from 'classnames';

import style from './root-footer.styl';

import NavListFooter from 'components/nav/list-footer';
import UiLogo2 from 'components/ui/logo2';
import UiButtonGhost from 'components/ui/button/ghost';
import InfoDevelopBy from 'components/info/develop-by';

class RootFooter extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {company} = this.props.company;
        return (
            <div className={style.footer}>
                <div className="cnr-main">
                    <div className={classnames(
                        'row',
                        style.area
                    )}>
                        <div className={classnames(
                            'col col--md-4',
                            style.socketLogo,
                            style.socket
                        )}>
                            <UiLogo2></UiLogo2>
                        </div>
                        <div className={classnames(
                            'col col--md-4',
                            style.socket
                        )}>
                            <NavListFooter />
                        </div>
                        <div className={classnames(
                            'col col--md-3',
                            style.socket,
                            style.noMobile
                        )}>
                            <UiButtonGhost>Заказать звонок</UiButtonGhost>
                        </div>
                        <div className={classnames(
                            'col col--md-3',
                           style.info,
                           style.socket
                        )}>
                            <div>{company.content}</div>
                            <div><InfoDevelopBy /></div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        );
    }
}

export default RootFooter;