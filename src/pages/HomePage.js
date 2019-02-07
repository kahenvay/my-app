import React, { Component } from 'react';
import api from '../api/api';
import EventsList from '../components/EventsList/EventsList';
import Message from '../components/Message/Message';
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

    return (
      <div>
        <h1>MIX Movement</h1>
        <h2>Latest events</h2>
        <div>
          { (!isLoading && !errors) ? (
            <EventsList events={events} />
          ) : (
            <Message errors={errors}/>
          )}
        </div>
      </div>
    )
  }
}

export default HomePage;