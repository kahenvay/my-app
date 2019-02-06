import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class EventsList extends Component {

    state = {
        events: []
    };

    componentDidMount() {
        this.setState({
            events: this.props.events
        });
    }

    render() {
        return (
        <ul>
                {this.state.events.map(event => {
                    const { id, title, introduction, description, duration, date, time, datetime, location, expected_costs, hosted_by, native_language, foreign_language, image, lat, lng} = event;
                    return (
                    <li key={id}>
                        <p><strong>{title}</strong> hosted by {hosted_by} the {date}</p>
                        <div>
                        <img src={image} alt={title} />
                        </div>
                        
                        <div><span>Cost : {expected_costs}</span> |  
                        <span> Native Language : {native_language}</span> | 
                        <span> Foreign Language : {foreign_language}</span>
                        <p>{introduction}</p>
                        </div>
                        <hr />
                    </li>
                    );
                })}
            </ul>
        )
    }
}
export default EventsList;