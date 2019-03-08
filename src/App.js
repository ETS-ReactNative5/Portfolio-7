import React, { Component } from 'react';
import './App.css';
import Navi from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/skills' component={Skills}/>
          <Route path='/myWork' component={MyWork}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      <Navi />


      </div>
    );
  }
}

export default App;
