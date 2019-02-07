import React from 'react';
import './aspectRatioBox.css';

const AspectRatioBox = (props) =>{

    return(
        <div className={"aspect-ratio-box"}>
            <div className={"aspect-ratio-box-inside "}>
                {props.children}
            </div>
        </div>
    )
}

export default AspectRatioBox;