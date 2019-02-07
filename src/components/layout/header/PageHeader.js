import React, { Component } from 'react';
import './header.css';
import NavBar from '../NavBar';

class PageHeader extends Component {
  render() {
    return (
      <header>
        <div className="header__top">
          <div className="logo_container">
          <img className="logo" alt="Gradient banner" src="https://z-m-scontent.flis5-1.fna.fbcdn.net/v/t1.0-9/50481853_2500649853342915_5506782981307498496_n.jpg?_nc_cat=108&_nc_ad=z-m&_nc_cid=1272&_nc_zor=9&_nc_ht=z-m-scontent.flis5-1.fna&oh=7c00ad8687755a389dcec549346b4de1&oe=5CFAB789"/>
          </div>
          <NavBar/>
        </div>
        <img className="header__banner" src="http://ucf.org.au/wp-content/uploads/ucf-gradient-banner.jpg" alt="Gradient banner from ucf.org.au"/>
      </header>
    )
  }
}
export default PageHeader;