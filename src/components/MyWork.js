import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router-dom';
import  Navi from './Nav';
import '../App.css';
import '../typeText';
import $ from "jquery";
import anime from '../../node_modules/animejs/lib/anime.es.js';


class myWork extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    
    





  }

  render() {
    return (
    <div className="myWorkPage">
    
      <h1 className="myWork-header">Websites I've done</h1>

      <div className="projectCards">
   
      <button><img className="projectimg" src="/images/BrainBallTrivia.png" alt="BrainBallTrivia" onClick={this.myfunction} /></button>
      <button><img className="projectimg" src="/images/OceanSideKick.png" alt="OceanSideKick" onClick={this.myfunction} /></button>
      <button><img className="projectimg" src="/images/CoDropPoster.png" alt="CoDropPoster" onClick={this.myfunction} /></button>

      </div>



      </div>
    )
  }
}

export default myWork;