import React from 'react';
import PropTypes from 'prop-types';
import './eventImage.css';

const EventImage = ({image, title}) =>{

    return(
        <div className="event__image">
            <img src={image} alt={title} />
        </div>
    )
}

EventImage.propTypes = {
    image : PropTypes.string,
    title: PropTypes.string
};

export default EventImage;