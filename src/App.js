import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './Hero.js';
import Section from './Section.js';
import Background from './Background.js';
import About from './About.js';
import Skills from './Skills.js';
import Home from './Home.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import Experience from './Experience.js';
import AboutItem from './AboutItem.js';
import { Button, Image, Row, Col, Grid, Jumbotron } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Link, IndexRoute, hashHistory } from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/projects' component={Projects} />
            </Switch>
          </BrowserRouter>
            
        );
    }
}

export default App;
