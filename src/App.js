import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GridListExampleSimple from './GridListExampleSimple.js';
import AutoCompleteExampleSimple from './AutoComplete.js';
import ControlledCarousel from './ControlledCarousel.js';
import { Carousel,Button } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ControlledCarousel />
        <Button bsStyle="primary">Primary</Button>

      <GridListExampleSimple />
      </div>
    );
  }
}


export default App;
