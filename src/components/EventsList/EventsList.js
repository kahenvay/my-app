import React, { Component } from 'react';

import EventListItem from '../EventListItem/EventListItem';
import './eventsList.css';

class EventsList extends Component {

    render() {
        return (
            <ul className="events__list">
                {this.props.events.map(event => {
                    return <EventListItem event={event} />
                })}
            </ul>
        )
    }
}
export default EventsList;