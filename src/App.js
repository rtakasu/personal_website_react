import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Test from './Test.js';
import Projects from './Projects.js';
import Topbar from './Topbar.js';
import { BrowserRouter, Route, Switch, Link, IndexRoute, hashHistory } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';
import ReactGA from 'react-ga';


class App extends Component {
    constructor(props) {
        super(props);

        ReactGA.initialize('UA-125812817-1');
        ReactGA.pageview(window.location.pathname + window.location.search);

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
          <ParallaxProvider>
            
            <BrowserRouter>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/test' component={Test} />
                <Route path='/projects' component={Projects} />
              </Switch>
            </BrowserRouter>
          </ParallaxProvider>
            
        );
    }
}

export default App;
