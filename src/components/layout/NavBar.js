import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
      
        <ul className="headerButtons">
          <li className="navButton"><Link to="">Home</Link></li>
        </ul>
      
    )
  }
}
export default NavBar;