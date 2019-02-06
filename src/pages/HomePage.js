import React, { Component } from 'react';
import api from '../api/api';
import EventsList from '../components/EventsList'
class HomePage extends Component {

  state = {
    events: [],
    isLoading: true,
    errors: null
  };

  getEvents() {
    api.getEvents().then((response) => {
      this.setState({
        events: response,
        isLoading: false
      });
    }).catch(errors => {
      this.setState({ errors, isLoading: false },()=>{
      })
    });
  }

  componentDidMount() {
    this.getEvents();
  }

  render() {
    const { isLoading, errors, events } = this.state;
    let message = <div><p>Loading</p></div>;
    if (errors){
      message =  
      <div>
      <p>There has been an unexpected error, please try again or contact john@smith.com </p>
      
      <p>It might help if you sent this along too : </p>

      <strong>{errors.toString()}</strong>
      </div>;
    }

    return (
      <div>
        <h1>MIX Movement</h1>
        <h2>Latest events</h2>
        <div>
          { (!isLoading && !errors) ? (
            <EventsList events={events} />
          ) : (
            <p>{message}</p>
          )}
        </div>
      </div>
    )
  }
}
export default HomePage;