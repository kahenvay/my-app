import React, { Component } from 'react';
import './header.css';
import NavBar from './NavBar';

class PageHeader extends Component {
  render() {
    return (
      <header>
        <NavBar/>
        <img class="header__banner" src="http://ucf.org.au/wp-content/uploads/ucf-gradient-banner.jpg" alt="Gradient banner from ucf.org.au"/>
      </header>
    )
  }
}
export default PageHeader;