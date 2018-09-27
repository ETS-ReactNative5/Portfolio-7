import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const home = () => {
  return (
    <div className="home">
    <nav className="nav-style">
      <ul>
        <li>
        <button class="btn-hover color-11">Home</button>
        </li>
        <li>
        <button class="btn-hover color-11">About</button>
        </li>
      </ul>
    </nav>
      <div className="home-content">
        <img className="avatar" src="/images/headshot.jpg" alt=""/>
        <h3>Welcome to my portfolio page! My name is</h3>
        <h1>Joshua Matos</h1>
        <p>and I'm Web Developer!</p>
      </div>
    </div>
  )
}

export default home;