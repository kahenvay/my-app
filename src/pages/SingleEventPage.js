import React, { Component } from 'react';
import api from '../api/api';
import MapContainer from '../components/MapContainer';
import './single_event.css';
class SingleEventPage extends Component {

  state = {
    event: {},
    isLoading: true,
    errors: null,
    id: 0
  };

  getEvent(id) {
    api.getEventsSingle(id).then((response) => {
      //console.log('getEventsSingle res', response);
      this.setState({
        event: response,
        isLoading: false
      });
    }).catch(error => {
      this.setState({ error, isLoading: false })
    });
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.setState({
        id
    }, () => {
        this.getEvent(id);
    });
  }

  render() {
    const { isLoading } = this.state;
    const { id, title, introduction, description, duration, date, time, datetime, location, expected_costs, hosted_by, native_language, foreign_language, image, lat, lng} = this.state.event;
    return (
      <div>
        <h2>SINGLE EVENT</h2>
        <div>
          {!isLoading ? (
                    
                    <div key={id}>
                        <p><strong>{title}</strong> hosted by {hosted_by} the {date} at {time}</p>
                        <div className={"aspect-ratio-box"}>
                            <div className={"aspect-ratio-box-inside "}>
                                <div className="single_event__image_wrapper">
                                    <img src={image} alt={title} />
                                </div>
                            </div>
                        </div>
                        <div className={"aspect-ratio-box"}>
                            <div className={"aspect-ratio-box-inside "}>
                                <div className="single_event__map_container"><MapContainer lat={lat} lng={lng} title={title}  /></div>
                            </div>
                        </div>
                        <div><span>Cost : {expected_costs}</span> |  
                        <span> Native Language : {native_language}</span> | 
                        <span> Foreign Language : {foreign_language}</span>
                        <p>{introduction}</p>
                        </div>
                        <div>
                            <p>description - {description}</p>
                            <p>duration - {duration}</p>
                            <p>location - {location}</p>
                            <p>expected_costs - {expected_costs}</p>
                            <p>hosted_by - {hosted_by}</p>
                            <p>native_language - {native_language}</p>
                            <p>foreign_language - {foreign_language}</p>
                            <p>lat - {lat}</p>
                            <p>lng - {lng}</p>
                        </div>
                    </div>
          ) : (
            <p>Loading ...</p>
          )}
        </div>
      </div>
    )
  }
}
export default SingleEventPage;