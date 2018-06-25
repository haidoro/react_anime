import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GridListExampleSimple from './GridListExampleSimple.js';
import AutoCompleteExampleDataSource from './AutoCompleteExampleSimple';
import ControlledCarousel from './ControlledCarousel.js';
import { Carousel,Button } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <BrowserRouter>
        <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </nav>
        </BrowserRouter>
      </div>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
    <ControlledCarousel />
    <div className="row">
      <h2> Bootstrap Buttons</h2>
      <Button bsStyle="primary">Primary</Button>
      <Button bsStyle="success">Success</Button>
      <Button bsStyle="info">Info</Button>
      <Button bsStyle="warning">Warning</Button>
      <Button bsStyle="danger">Danger</Button>
    </div>
  </div>
)
const About = () => (
  <div>
    <h2>About</h2>
    <div className="row">
      <h2>Material Grid</h2>
      <GridListExampleSimple />
    </div>
  </div>
)
const Contact = () => (
  <div>
    <h2>Contact</h2>
    <div className="row">
        <MuiThemeProvider>
        <h2>Material Auto Complete</h2>
          <AutoCompleteExampleDataSource />
        </MuiThemeProvider>
    </div>
  </div>
)

export  default App
