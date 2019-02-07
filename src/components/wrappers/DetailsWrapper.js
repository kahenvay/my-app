import React from 'react';

const DetailsWrapper = (props) =>{

    return(
        <div className={"detailsWrapper"}>
            {props.children}
        </div>
    )
}

export default DetailsWrapper;