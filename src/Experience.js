import React, { Component } from 'react';
import ExperienceItem from './ExperienceItem.js';
import { Container, Row, Col } from 'reactstrap';

class Experience extends React.Component {
	render () {
		return (
			  <Container>
			  		<ExperienceItem
							date='July 2017 - Present'
							title='Technical Product Manager, PwC'
							description="Operated as the TPM for one of the PwC's client's mobile development teams, serving as the point of reference for technical decisions regarding architectural design or implementation"/>
			  		<ExperienceItem
							date='July 2017 - January 2018'
							title='Innovation Lead, PwC'
							description='Designed and prototyped a voice assistant for the client’s mobile application, using speech-recognition tools and cloud-based Natural Language Processing'/>
						<ExperienceItem
							date='June 2016 - August 2016'
							title='Application Developer, PwC'
							description='Developed an Android mobile application that used the device’s native GPS capabilities to allow the Law Firm’s clients to easily “check-in” their location during their immigration applications'/>
						<ExperienceItem
							date='June 2015 - September 2015'
							title='Software Developer, Anheuser-Busch Inbev'
							description='Developed an iOS application, “beHoppy”, in Objective-C that used computer vision to scan beer labels and allow users to log and rate beers. Users could search in application’s database (Ruby on Rails backend) for beer taste profiles and ratings'/>
						<ExperienceItem
							date='June 2014 - October 2014'
							title='Software Developer, Rocket Internet'
							description='Developed an iOS application (Cordova) for one of Rocket Internet’s eCommerce startups, Airu. The app integrated with the eCommerce’s APIs to download recent sales promotions and allowed users to quickly cycle though these promotions in a “tinder- style” stack of cards'/>
			  </Container>
		)
	}
}

export default Experience;