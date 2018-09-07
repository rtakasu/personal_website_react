import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './Hero.js';
import Section from './Section.js';
import Background from './Background.js';
import About from './About.js';
import Skills from './Skills.js';
import Experience from './Experience.js';
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
                  id={'skills'}
                  title={'Skills'}
                  background={'grey'}
                  sectionBody={<Skills/>}
                />
                <Section
                  id={'experience'}
                  title={'Experience'}
                  background={'white'}
                  sectionBody={<Experience/>}
                />

            </div>
        );
    }
}

export default App;
