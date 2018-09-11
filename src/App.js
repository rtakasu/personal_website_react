import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Test from './Test.js';
import Projects from './Projects.js';
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
              <Route path='/test' component={Test} />
              <Route path='/projects' component={Projects} />
            </Switch>
          </BrowserRouter>
            
        );
    }
}

export default App;
