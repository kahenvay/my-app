import React from 'react';
import PropTypes from 'prop-types';
import './groupeTitleDescription.css';

const GroupeTitleDescription = ({title,description}) =>{

    return(
        <div className="groupeTitleDescription">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

//why is this not triggering errors
GroupeTitleDescription.propTypes = {
    image : PropTypes.string,
    title: PropTypes.string
};

export default GroupeTitleDescription;