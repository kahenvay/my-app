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
      //console.log('getEvents res', response);
      this.setState({
        events: response,
        isLoading: false
      });
    }).catch(errors => {
      this.setState({ errors, isLoading: false },()=>{
        console.log('error: ', errors);
      })
    });
  }

  componentDidMount() {
    this.getEvents();
  }

  render() {
    const { isLoading, errors, events } = this.state;
    let message = 'Loading';
    if (errors){
      message = 'There has been an unexpected error, please try again or contact john@smith.com'
    }

    return (
      <div>
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