import React, { Component } from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import PageHeader from './components/layout/header/PageHeader'; 
import PageFooter from './components/layout/footer/PageFooter'; 
import HomePage from './pages/HomePage';
import SingleEventPage from './pages/SingleEvent/SingleEventPage';
import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <PageHeader />
          <main>
            <Route name="home" exact path="/" component={HomePage} />
            <Route name="single event" exact path='/event/:id' component={SingleEventPage} />
          </main>
          <PageFooter />
        </div>
      </Router>
    ); 
  }
}

export default App;
