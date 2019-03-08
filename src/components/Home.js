import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router-dom';
import  Navi from './Nav';
import '../App.css';
import '../typeText';
import $ from "jquery";
import anime from '../../node_modules/animejs/lib/anime.es.js';
import { enable, destory } from 'splash-screen';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    $('.ml12').each(function(){
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

  // -=-=-=-=-=-=-=- This function appears and disappeared texted content. -=-=-=-=-=-=-=-
    anime.timeline({loop: true})
      .add({
        targets: '.ml12 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 3000,
        delay: function(el, i) {
          return 500 + 30 * i;
        }
      }).add({
        targets: '.ml12 .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 2900,
        delay: function(el, i) {
          return 100 + 30 * i;
        }
      });
    
    // -=-=-=-=-=-=-=- This function creates the circle mail. -=-=-=-=-=-=-=-

      anime.timeline({loop: true})
      .add({
        targets: '.ml8 .circle-white',
        scale: [0, 3],
        opacity: [1, 0],
        easing: "easeInOutExpo",
        rotateZ: 360,
        duration: 1100
      }).add({
        targets: '.ml8 .circle-container',
        scale: [0, 1],
        duration: 1100,
        easing: "easeInOutExpo",
        offset: '-=1000'
      }).add({
        targets: '.ml8 .circle-dark',
        scale: [0, 1],
        duration: 1100,
        easing: "easeOutExpo",
        offset: '-=600'
      }).add({
        targets: '.ml8 .letters-left',
        scale: [0, 1],
        duration: 1200,
        offset: '-=550'
      }).add({
        targets: '.ml8 .bang',
        scale: [0, 1],
        rotateZ: [45, 15],
        duration: 1200,
        offset: '-=1000'
      }).add({
        targets: '.ml8',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 2800
      });

    anime({
      targets: '.ml8 .circle-dark-dashed',
      rotateZ: 360,
      duration: 8000,
      easing: "linear",
      loop: true
    });

    // Wrap every letter in a span
    $('.ml16').each(function(){
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    anime.timeline({loop: true})
      .add({
        targets: '.ml16 .letter',
        translateY: [-100,0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: 3700
      }).add({
        targets: '.ml16',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 3400
      });

    
  }

  
  render() {
    return (
      <div className="home">

        <Navi />

        <div className="home-content">
          
          <h1 class="ml12">Hello my name is Joshua Matos Im a web developer from Miami</h1>
          <div class="sk-folding-cube">
            <div class="sk-cube1 sk-cube"></div>
            <div class="sk-cube2 sk-cube"></div>
            <div class="sk-cube4 sk-cube"></div>
            <div class="sk-cube3 sk-cube"></div>
          </div>

        
          <h1 class="ml16">CONTACT ME</h1>

          <h1 class="ml8">
            <span class="letters-container">

          <Link to = "/contact">
            <span class="letters letters-left"><img className="msgme" src="/images/whiteMailIcon.png" alt=""/></span>
          </Link>
            <span class="letters bang">!</span>
            
            </span>
        <Link to = "/contact">
            <span class="circle circle-white"></span>
            <span class="circle circle-dark"></span>
        </Link>
            <span class="circle circle-container"><span class="circle circle-dark-dashed"></span></span>
          </h1>


        </div>

      </div>
    )
  }
}
export default home;