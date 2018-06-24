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
      <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ControlledCarousel />
        <div className="row">
          <h2> Bootstrap Buttons</h2>
          <Button bsStyle="primary">Primary</Button>
          <Button bsStyle="success">Success</Button>
          <Button bsStyle="info">Info</Button>
          <Button bsStyle="warning">Warning</Button>
          <Button bsStyle="danger">Danger</Button>
        </div>
        <div className="row">
          <h2>Meterial Grid</h2>
          <GridListExampleSimple />
      </div>
      </div>
    );
  }
}


export default App;
