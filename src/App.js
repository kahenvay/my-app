import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import PageHeader from './components/layout/PageHeader';
import PageFooter from './components/layout/PageFooter';
import HomePage from './pages/HomePage';
import SingleEventPage from './pages/SingleEventPage';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <PageHeader />
          <main>
            <Route name="home" exact path="/" component={HomePage} />
            <Route name="single event" path='event/:id' component={SingleEventPage} />
          </main>
          <PageFooter />
        </div>
      </Router>
    );
  }
}

export default App;
