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

      <div className="skillsContent">

        <h1 className="skills-header">Skills & Experience</h1>
        
        <h2> I'm a <span className="white">programmer</span>.</h2>
        
      <p>
        For the <span className="white">front-end</span> I usually work with Javascript, either standalone or including popular frameworks like ReactJS and VueJS. I also make the web pretty by using Sass, CSS and, whenever needed, any of their friends: Bootstrap, Bulma, etc.
      </p>

      <p>
        For the <span className="white">back-end</span> I also work with Javascript (NodeJS, Express, MongoDB, etc). But, of course, whenever the project requires PHP, I do PHP as well (Wordpress, Laravel, etc).
      </p>

      </div>
      
    </div>
    )
  }
}

export default skills;