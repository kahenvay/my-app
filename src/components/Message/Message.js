import React from 'react';
import PropTypes from 'prop-types';

const Message = ({errors}) =>{

    
    let message = <div><p>Loading</p></div>;
    
    if (errors){
      message =  
      <div>
      <p>There has been an unexpected error, please try again or contact john@smith.com </p>
      
      <p>It might help if you sent this along too : </p>

      <strong>{errors.toString()}</strong>
      </div>;
    }

    return(
        message
    )
}

//why is this not triggering errors
Message.propTypes = {
    errors : PropTypes.object,
};

export default Message;


