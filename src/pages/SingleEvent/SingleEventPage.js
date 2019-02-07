import React, { Component } from 'react';
import api from '../../api/api';
import MapContainer from '../../components/MapContainer';
import './singleEvent.css';
import EventImage from './../../components/EventImage/EventImage';
import Message from '../../components/Message/Message';
import DetailLine from './../../components/DetailLine/DetailLine';
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
    const { id, title, introduction, description, duration, date, time, location, expected_costs, hosted_by, native_language, foreign_language, image, lat, lng} = this.state.event;
    return ( 
      <div>
        <h1>{title}</h1>
        <div>
          {!isLoading && !errors ? (
                    
                    <div key={{id}}>
                        <p>hosted by {hosted_by} the {date} at {time}</p>
                        <div className="single_event__illustrations_wrapper">
                            <div className={"aspect-ratio-box"}>
                                <div className={"aspect-ratio-box-inside "}>
                                    <EventImage image={image} title={title}/>
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
                                <DetailLine title={"Cost"} value={expected_costs}/>
                                <DetailLine title={"duration"} value={duration}/>
                                <DetailLine title={"location"} value={location}/>
                                <DetailLine title={"expected_costs"} value={expected_costs}/>
                                <DetailLine title={"hosted_by"} value={hosted_by}/>
                                <DetailLine title={"native_language"} value={native_language}/>
                                <DetailLine title={"foreign_language"} value={foreign_language}/>
                                <DetailLine title={"lat"} value={lat}/>
                                <DetailLine title={"lng"} value={lng}/>
                            </div>
                        </div>
                    </div>
          ) : (
            <Message errors={errors}/>
          )}
        </div>
      </div>
    )
  }
}
export default SingleEventPage;