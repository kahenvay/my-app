import React, { Component } from 'react';
import api from '../api/api';
class HomePage extends Component {

  state = {
    events: {},
    isLoading: true,
    errors: null
  };

  getEvents() {
    api.getEvents().then((response) => {
      console.log('getEvents res', response);
    }).catch(error => {
      this.setState({ error, isLoading: false })
    });
  }

  componentDidMount() {
    this.getEvents();
  }

  render() {
    return (
      <div>
        Home page
      </div>
    )
  }
}
export default HomePage;