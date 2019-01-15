import React from 'react';
import { Link } from 'react-router-dom';
import  Navi from './Nav';
import '../App.css';

const home = () => {
  return (
    <div className="home">
      <Navi />
      <div className="home-content">
        <h3>Welcome to my portfolio page! My name is</h3>
        <h1>Joshua Matos</h1>
        <p>and I'm Web Developer!</p>
      </div>
    </div>
  )
}

export default home;