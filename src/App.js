import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
        </Switch>
      <About />

      </div>
    );
  }
}

export default App;
