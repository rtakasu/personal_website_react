import React, { Component } from 'react';
import './App.css';
import Hero from './Hero.js';
import HeroVideo from './HeroVideo.js';
import Section from './Section.js';
import ParallaxSection from './ParallaxSection.js';
import Background from './Background.js';
import Skills from './Skills.js';
import Contact from './Contact.js';
import Topbar from './Topbar.js';
import Experience from './Experience.js';
import { Parallax } from 'react-scroll-parallax';



class Home extends React.Component {
	render () {
		return (
			  <div className='container-div'>
          <Topbar/>
          <HeroVideo/>                
          <Section
            id={'background'}
            title={'Background'}
            background={'#1b1b1b'}
            sectionBody={<Background/>}
          />
          <Section
            id={'skills'}
            title={'Skills'}
            background={'white'}
            sectionBody={<Skills/>}
          />
          <ParallaxSection
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
