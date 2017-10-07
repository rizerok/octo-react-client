import React from 'react';
import ReactDOM from 'react-dom';


class Marker extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        console.log('auuuuu');
        this.props.map.markerAdd([{
            lat:this.props.lat,
            lng:this.props.lng
        }],{
            icon:this.props.iconConfig
        },(marker)=>{
            if(this.props.openOne){
                marker.addListener('click', (event) => {
                    if(this.props.children){
                        let div = document.createElement('div');
                        ReactDOM.render(
                            this.props.children,
                            div
                        );
                        this.props.map.ibOpenOne(marker, 'gmapsInfoBubble', div);
                    }

                });
            }else{
                marker.addListener('click', (event) => {
                    if(this.props.children){
                        let div = document.createElement('div');
                        ReactDOM.render(
                            this.props.children,
                            div
                        );
                        this.props.map.ibOpen(marker,div);
                    }
                });
            }
        });
    }
    render(){
        return null;
    }
}

export default Marker;