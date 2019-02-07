import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventListItem from '../EventListItem/EventListItem';
import './eventsList.css';

class EventsList extends Component {

    render() {
        return (
            <ul className="events__list">
                {this.props.events.map(event => {
                    return <EventListItem key={event.id} event={event} />
                })}
            </ul>
        )
    }
}

//why is this not triggering errors
EventsList.propTypes = {
    events : PropTypes.array,
    event : PropTypes.object
};

export default EventsList;