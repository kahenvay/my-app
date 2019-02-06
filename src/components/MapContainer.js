import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 

class MapContainer extends Component {

state = {
    
    lat:0,
    lng:0,
    title:'You are here :)'
  };

/*state = {
    lat:this.props.lat,
    lng:this.props.lng,
    title:this.props.title
};*/

  componentDidMount() {
        this.setState({
            lat:this.props.lat,
            lng:this.props.lng,
            title:this.props.title
        }, () => {
            console.log('state: ', this.state);
        })

    }


  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker 
            position={{lat: this.state.lat, lng: this.state.lng}}
            name={this.state.title} 
            />
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyD8ccSo9pwG9zl12NruMmd2i_DLY6Q-E9k')
})(MapContainer)