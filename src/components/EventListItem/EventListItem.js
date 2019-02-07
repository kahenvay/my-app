import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './eventListItem.css';
import EventImage from './../EventImage/EventImage';

const EventListItem = ({event}) =>{

    const { id, title, date, hosted_by, image} = event;

    return(
        <li key={id}>
            <a href={"/event/" + id }></a>
            <p><span>{title}</span> hosted by {hosted_by} the {date}</p>
            <div>
            <EventImage image={image} title={title}/>
            </div>
        </li>
    )
}

//why is this not triggering errors
EventListItem.propTypes = {
    event : PropTypes.string,
    title: PropTypes.bool
};

export default EventListItem;