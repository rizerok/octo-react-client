import React from 'react';
import style from './root-header.styl';
import classnames from 'classnames';
import Inputmask from 'inputmask';

import NavListHeader from 'components/nav/list-header';
import NavBurger from 'components/nav/burger';
import UiLogo from 'components/ui/logo';
import ButtonDefault from 'components/ui/button/default';


class RootHeader extends React.Component{
    constructor(props){
        super(props);

        this.phoneMask = new Inputmask('+7 (999) 999-99-99');
    }
    render(){
        const {phone} = this.props.company;
        return (
            <div className={style.header}>
                <div className="cnr-main">
                    <div className={classnames(
                        'row',
                        style.area
                    )}>
                        <div className={style.socketLogo}>
                            <UiLogo />
                        </div>
                        <div className={classnames(
                            'col col--md-5', 
                            style.noMobile
                        )}>
                            <NavListHeader
                                nav={this.props.nav}
                                active
                            />
                        </div>
                        <div className={classnames(
                            'col col--lg-1',
                            style.burger
                        )}>
                            <NavBurger />
                        </div>
                        <div className={classnames(
                            'col',
                            style.noMobileLg,
                            style.info
                        )}>
                            <a  className={style.phone} href={`tel:${phone.content}`}>
                                <span>{this.phoneMask.format(phone.content)}</span>
                            </a>
                            <ButtonDefault>Заказать звонок</ButtonDefault>
                        </div>
                    </div>

                </div>
            </div>
            
        );
    }
}

export default RootHeader;