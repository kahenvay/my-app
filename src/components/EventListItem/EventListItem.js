import React, { Component } from 'react';
import './eventListItem.css';

const EventListItem = ({event}) =>{

    const { id, title, date, hosted_by, image} = event;

    return(
        <li key={id}>
            <a href={"/event/" + id }></a>
            <p><span>{title}</span> hosted by {hosted_by} the {date}</p>
            <div>
            <img src={image} alt={title} />
            </div>
        </li>
    )
}
export default EventListItem;