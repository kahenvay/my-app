import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './events_list.css';
class EventsList extends Component {

    state = {
        events: []
    };

    componentDidMount() {
        this.setState({
            events: this.props.events
        });
    
    }
    //<a href={"/event/" + id }></a>
    //<Link to='/event/id' />

    render() {
        return (
        <ul className="events__list">
                {this.state.events.map(event => {
                    const { id, title, introduction, description, duration, date, time, datetime, location, expected_costs, hosted_by, native_language, foreign_language, image, lat, lng} = event;
                    return (
                    <li key={id}>
                        
                        <a href={"/event/" + id }></a>
                        <p><strong>{title}</strong> hosted by {hosted_by} the {date}</p>
                        <div>
                        <img src={image} alt={title} />
                        </div>
                        
                    </li>
                    );
                })}
            </ul>
        )
    }
}
export default EventsList;