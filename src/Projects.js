import React, { Component } from 'react';
import Section from './Section.js';
import Experience from './Experience.js';
import ProjectItem from './ProjectItem.js';
import Contact from './Contact.js';
import { Container, Row, Col } from 'reactstrap';

class About extends React.Component {
	render () {
		return (
			<Container>
		  		<Row className='project-item-big'>
				<Col lg={{size:4, order:1}} md={{size:4, order:1}} sm={{order: 2}} xs={{order: 2}} >
					<a href={this.props.url} className='project-item-title'>{this.props.title}</a>
					<p>BeHoppy</p>
				</Col>
				<Col lg={{size:8, order:2}} md={{size:8, order:2}} sm={{order: 1}} xs={{order: 1}}>
					<img 
					className='project-item-image-small-left'
					src='/iphone_behoppy.png'/>
					<img 
					className='project-item-image-small-right'
					src='/iphone_behoppy2.png'/>
				</Col>
				</Row>
				<ProjectItem
				title='PERSONAL WEBSITE V2'
				description='Experience description, did this and that '
				img='/macbook_personalwebsite.png'
				imageSide='right'/>
				<Col lg={12}>
		  			<div>
		  			<p className="section-subheading">Other Projects</p>
		  			<div className='blue-subheading-div'></div>
		  			</div>	
		  		</Col>
				<Row>
					<ProjectItem
					title='PERSONAL WEBSITE V2'
					description='Experience description, did this and that '/>
					<ProjectItem
					title='PERSONAL WEBSITE V2'
					description='Experience description, did this and that '/>
				</Row>


			  </Container>
		)
	}
}

export default About;