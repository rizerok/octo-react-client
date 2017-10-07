import React from 'react';
import classnames from 'classnames';

import style from './widget-top-part.styl';

import RedactorDefault from 'components/redactor/default';

class WidgetTopPart extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={style.container}>
                <div className="cnr-main">
                    <div className={style.header}>
                        <div className={style.title}>
                            <h2>{this.props.title}</h2>
                        </div>
                        {this.props.button?(
                            this.props.button
                        ):null}
                    </div>
                </div>
                <div className="cnr-main">
                    <div className="row">
                        <div className="col col--md-9 col--xxs-12">
                            <div className={style.description}>
                                <RedactorDefault>
                                    {this.props.content}
                                </RedactorDefault>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default WidgetTopPart;