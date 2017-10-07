import React from 'react';

import style from './style.styl';

import RedactorDefault from 'components/redactor/default';

class Default extends React.Component{
    constructor(props){
        super(props);
    }
    get content(){
        return null;
    }
    render(){
        return (
            <div className={style.container}>
                <div className="cnr-main">
                    <div className={style.title}>
                        <h2>{this.props.title}</h2>
                    </div>
                </div>
                <div className="cnr-main">
                    <div className={style.description}>
                        <RedactorDefault>
                            {this.props.content}
                        </RedactorDefault>
                    </div>
                </div>
                <div className={style.content}>
                    {this.content}
                </div>
            </div>
        );
    }
}

export default Default;