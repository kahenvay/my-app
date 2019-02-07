import React from 'react';

const IllustrationWrapper = (props) =>{

    return(
        <div className={"illustrationsWrapper"}>
            {props.children}
        </div>
    )
}

export default IllustrationWrapper;