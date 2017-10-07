import React from 'react';
import gmaps from 'gmaps-lib';
import Marker from '../marker';

class Gmap extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            markers:[]
        };
    }
    componentDidMount(){
        console.log('did mount',this.props.children);
        this.map = new gmaps.Map(
            this.mapEl,
            this.props.mapConfig,
            this.props.ibConfig
        );

        this.setMarkers(this.props);
    }
    setMarkers(props){
        console.log(props.children);
        let markers;
        if(Array.isArray(props.children)){
            markers = props.children.map((c,i)=>{
                if(c.type===Marker){
                    return React.cloneElement(
                        c,
                        {
                            ...c.props,
                            map:this.map,
                            key:i
                        }
                    );
                }
                return c;
            });
        }else{
            markers = [];
            if(props.children.type===Marker){
                markers.push(React.cloneElement(
                    props.children,
                    {
                        ...props.children.props,
                        map:this.map,
                        key:0
                    }
                ));

            }
        }

        this.setState({
            markers
        });
    }
    componentWillReceiveProps(next){
        //non  zero length and  (different length or different props)
        if(next.children.length && (this.props.children.length !== next.children.length || this.props.children.length && next.children.some((c,i)=>{
            if(c.type===Marker){
                console.log(this.props.children[i]);
                return (c.props.lat === this.props.children[i].lat
                    && c.props.lng === this.props.children[i].lng) === true;
            }
            return true;
        }))){
            this.setMarkers(next);
        }

    }
    componentDidUpdate(){

        if(this.props.autoVp==='fit'){
            this.map.vpOnMarkers();
        }
        if(this.props.autoVp==='center'){
            this.map.vpOnMarkers(false);
        }

    }
    render(){
        return (
            <div ref={(map) => { this.mapEl = map; }}
                 className={this.props.className}>
                {this.state.markers}
            </div>
        );
    }
}

export default Gmap;