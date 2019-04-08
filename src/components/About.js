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
    <div className="about-page">
      <img className="aboutHeadshot" src="/images/headshot.jpg" alt=""/>
      <h1 className="about-header">About me</h1>
      <p className="subHeader">I'm a web developer based in sunny Miami, Florida.</p>

      <div className="contentDiv">
      <p className="aboutContent">I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not coding, tweeting or pushing pixels, you'll find me gaming, cooking, or fishing.</p>
      </div>
	    <div id="wrapper">
		<div id="image">
			<div className="image i1"><img className="portfolioImg" src="/images/fishing.png"/></div>
			<div className="image i2"><img className="portfolioImg" src="/images/cityCoding.png"/></div>
			<div className="image i3"><img className="portfolioImg" src="/images/caliTank.png"/></div>
			<div className="image i4"><img className="portfolioImg" src="/images/armyGreenShirt.png"/></div>
			<div className="image i5"><img className="portfolioImg" src="/images/tampaPic.png"/></div>
			<div className="image i6"><img className="portfolioImg" src="/images/keywestWater.png"/></div>
			<div className="image i7"><img className="portfolioImg" src="/images/jettiesMackerel.png"/></div>
			<div className="image i8"><img className="portfolioImg" src="/images/venetianPool.png"/></div>
		</div>
	  </div>


    </div>
    )
  }
}

export default about;