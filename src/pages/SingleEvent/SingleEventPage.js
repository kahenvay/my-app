import React, { Component } from 'react';
import api from '../../api/api';
import MapContainer from '../../components/MapContainer';
import './singleEvent.css';
import EventImage from './../../components/EventImage/EventImage';
import Message from '../../components/Message/Message';
import DetailLine from './../../components/DetailLine/DetailLine';
import GroupeTitleDescription from './../../components/GroupeTitleDescription/GroupeTitleDescription';
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
                            <GroupeTitleDescription title={"Introduction to the event"} description={introduction}/>
                            <GroupeTitleDescription title={"Details of the event"} description={description}/>
                            <div className={"single_event__short_details_wrapper"}>
                                <DetailLine title={"Cost"} description={expected_costs}/>
                                <DetailLine title={"duration"} description={duration}/>
                                <DetailLine title={"location"} description={location}/>
                                <DetailLine title={"expected_costs"} description={expected_costs}/>
                                <DetailLine title={"hosted_by"} description={hosted_by}/>
                                <DetailLine title={"native_language"} description={native_language}/>
                                <DetailLine title={"foreign_language"} description={foreign_language}/>
                                <DetailLine title={"lat"} description={lat}/>
                                <DetailLine title={"lng"} description={lng}/>
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