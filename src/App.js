import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './Hero.js';
import Section from './Section.js';
import Background from './Background.js';
import About from './About.js';
import AboutItem from './AboutItem.js';
import { Button, Image, Row, Col, Grid, Jumbotron } from 'react-bootstrap';

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
            <div className='container-div'>
                <Hero/>
                <Section
                  id={'background'}
                  title={'Background'}
                  background={'#fff'}
                  sectionBody={<Background/>}
                />
                <Section
                  id={'background'}
                  title={'Background'}
                  background={'grey'}
                  sectionBody={<About/>}
                />

            </div>
        );
    }
}

export default App;
