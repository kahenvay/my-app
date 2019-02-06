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
      this.setState({
        event: response,
        isLoading: false
      });
    }).catch(errors => {
      this.setState({ errors, isLoading: false })
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
    const { isLoading, errors } = this.state;
    const { id, title, introduction, description, duration, date, time, datetime, location, expected_costs, hosted_by, native_language, foreign_language, image, lat, lng} = this.state.event;
    let message = 'Loading';
    if (errors){
      message = 'There has been an unexpected error, please try again or contact john@smith.com'
    }
    return ( 
      <div>
        <h1>{title}</h1>
        <div>
          {!isLoading && !errors ? (
                    
                    <div key={id}>
                        <p>hosted by {hosted_by} the {date} at {time}</p>
                        <div className="single_event__illustrations_wrapper">
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
                        </div>
                        <div className={"single_event__details_wrapper"}>
                            <div>
                                <h2>Introduction to the event</h2>
                            <p>{introduction}</p>
                            </div>
                            <div>
                                <h2>
                                    Details of the event
                                </h2>
                                <p>{description}</p>
                            </div>
                            <div className={"single_event__short_details_wrapper"}>
                                <div>
                                    <p><span>Cost : </span> {expected_costs}</p>
                                </div>
                                <div>
                                    <p><span>Native Languag : </span> {native_language}</p>
                                </div>
                                <div>
                                    <p><span>Foreign Languag : </span> {foreign_language}</p>
                                </div>
                                <div>
                                    <p><span>duration : </span> {duration}</p>
                                </div>
                                <div>
                                    <p><span>location : </span> {location}</p>
                                </div>
                                <div>
                                    <p><span>expected_costs : </span> {expected_costs}</p>
                                </div>
                                <div>
                                    <p><span>hosted_by : </span> {hosted_by}</p>
                                </div>
                                <div>
                                    <p><span>native_language : </span> {native_language}</p>
                                </div>
                                <div>
                                    <p><span>foreign_language : </span> {foreign_language}</p>
                                </div>
                                <div>
                                    <p><span>lat : </span> {lat}</p>
                                </div>
                                <div>
                                    <p><span>lng : </span> {lng}</p>
                                </div>
                            </div>
                        </div>
                    </div>
          ) : (
            <p>{message}</p>
          )}
        </div>
      </div>
    )
  }
}
export default SingleEventPage;