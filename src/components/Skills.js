import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router-dom';
import  Navi from './Nav';
import '../App.css';
import '../typeText';
import $ from "jquery";
import anime from '../../node_modules/animejs/lib/anime.es.js';


class skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {}

  render() {
    return (
    <div className="skills-page">
    
      <h1 className="skills-header">Skills</h1>
    
    </div>
    )
  }
}

export default skills;