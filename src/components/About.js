import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router-dom';
import  Navi from './Nav';
import '../App.css';
import '../typeText';
import $ from "jquery";
import anime from '../../node_modules/animejs/lib/anime.es.js';


class about extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {}

  render() {
    return (
    <div className="about">
      
      <h1 className="about-header">About me</h1>
      <p>I love to code!</p>
    
    </div>
    )
  }
}

export default about;