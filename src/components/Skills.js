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
        For the <span className="white">front-end</span> I usually work with Javascript, either standalone or including popular frameworks like ReactJS. I also make the web pretty by using Sass, CSS and, whenever needed, any of their friends: Bootstrap, Bulma, etc.
      </p>

      <p>
        For the <span className="white">back-end</span> I also work with Javascript (NodeJS, Express, MongoDB, etc). But, of course, whenever the project requires PHP, I do PHP as well (Wordpress, Laravel, etc).
      </p>

      </div>
      
      <section class="container">
  
  <h3>I'm a junior <span className="white">web developer</span> and here's what I can do</h3>
  
<div className="chartsec">


  {/* <!-- HTML Chart --> */}
  <div>
  <figure class="chart" data-percent="75">
    <figcaption>HTML</figcaption>
     <img class="html" src="/images/htmlIcon.png"/>
    <svg width="200" height="200">
      <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
    </svg>
  </figure>
  <h3 className="white chartname htmlname">HTML</h3>
  </div>
  

  {/* <!-- CSS Chart --> */}
  <div>
  <figure class="chart" data-percent="75">
    <figcaption>CSS</figcaption>
    <img class="css" src="/images/cssIcon.png"/>
    <svg width="200" height="200">
      <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
    </svg>
  </figure>
  <h3 className="white chartname cssname">CSS</h3>
  </div>

  {/* <!-- Javascript Chart --> */}
  <div>
  <figure class="chart" data-percent="50">
    <figcaption>Javascript</figcaption>
    <img class="javascript" src="/images/javascriptIcon.png"/>
    <svg width="200" height="200">
      <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
    </svg>
  </figure>
  <h3 className="white chartname jsname">JavaScript</h3>
  </div>

  {/* <!-- Node.js Chart --> */}
  <div>
  <figure class="chart" data-percent="25">
    <figcaption>Node</figcaption>
    <img class="node" src="/images/nodejs.png"/>
    <svg width="200" height="200">
      <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
    </svg>
  </figure>
  <h3 className="white chartname nodejsname">NodeJS</h3>
  </div>

  <div>
    {/* <!-- ReactJS Chart --> */}
    <figure class="chart" data-percent="50">
    <figcaption>ReactJS</figcaption>
    <img class="react" src="/images/reactIcon.png"/>
    <svg width="200" height="200">
      <circle class="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"/>
    </svg>
  </figure>
  <h3 className="white chartname reactname">ReactJS</h3>
  </div>
</div>
</section>

    </div>
    )
  }
}

export default skills;