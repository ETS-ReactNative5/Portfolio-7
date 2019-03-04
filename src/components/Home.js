import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  Navi from './Nav';
import '../App.css';
// import sample from './sample.mp4';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  

  
  render() {
    return (
      <div className="home">
        <Navi />
        <div className="home-content">
        <div class='console-container'><span id='text'></span><div class='console-underscore' id='console'>&#95;</div></div>
        </div>
      </div>
    )
  }
}
export default home;