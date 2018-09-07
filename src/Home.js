import React, { Component } from 'react';
import './App.css';
import Hero from './Hero.js';
import Section from './Section.js';
import Background from './Background.js';
import Skills from './Skills.js';
import Contact from './Contact.js';
import Experience from './Experience.js';
import { Button, Image, Row, Col, Grid, Jumbotron } from 'react-bootstrap';

class Home extends React.Component {
	render () {
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
          <Section
            id={'projects'}
            title={'Projects'}
            background={'grey'}
            sectionBody={<Experience/>}
          />
          <Contact/>

      </div>
		)
	}
}

export default Home;
