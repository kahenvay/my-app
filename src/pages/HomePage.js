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
    }).catch(error => {
      this.setState({ error, isLoading: false })
    });
  }

  componentDidMount() {
    this.getEvents();
  }

  render() {
    const { isLoading, events } = this.state;
    return (
      <div>
        <h2>Latest events</h2>
        <div>
          {!isLoading ? (
            <EventsList events={events} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    )
  }
}
export default HomePage;