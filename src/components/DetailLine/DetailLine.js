import React from 'react';
import PropTypes from 'prop-types';
import './detailLine.css';

const DetailLine = ({title,description}) =>{

    return(
        <div className="detailLine">
            <p><span>{title} : </span> {description}</p>
        </div>
    )
}

DetailLine.propTypes = {
    image : PropTypes.string,
    title: PropTypes.string
};

export default DetailLine;