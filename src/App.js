import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './Hero.js';
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
                <Grid>
                <Col xs={12} md={8}>ffasd</Col>
                </Grid>
            </div>
        );
    }
}

export default App;
