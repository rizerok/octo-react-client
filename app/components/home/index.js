import React from 'react';
import Siema from 'siema';

import style from './home.styl';

import Page from 'components/page/classes';
import ImageModified from 'components/image/modified';

class Home extends Page.Default{
    constructor(props){
        super(props);
    }
    componentDidUpdate(){
        if(!this.slider && this.props.slider){
            this.slider = new Siema({
                selector: `.${style.sliderArea}`,
                perPage: {
                    1280:2
                }
            });
        }
    }
    get container(){
        return (
            <div className={style.container}>
                <div className={style.slider}>
                    <div className="cnr-main">
                        <div className="row">
                            <div className="col col--xxs-12 col--md-10">
                                
                                <div className={style.sliderArea}>
                                    {this.props.slider && this.props.slider.map((item,i)=>(

                                        <div className={style.sliderItem} key={i}>
                                            <ImageModified
                                                imgObj={item.image_parsed}
                                                breakpoints={{0:{img:'_480x210_center'}}}
                                            />
                                            <div className={style.sliderText}>
                                                <div className={style.sliderTitle}>
                                                    <span>{item.title}</span>
                                                </div>
                                                <div className={style.sliderDescription}>
                                                    <span>{item.description}</span>
                                                </div>
                                            </div>
                                        </div>

                                    ))}

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {this.content}
            </div>
        );
    }
}

export default Home;