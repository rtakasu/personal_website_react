import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Background extends React.Component {
	render () {
		return (
			  <Container>
			  	<Row>
			  		<Col lg={4} md={4}>
							<div className='image-cropper'>
								<img 
								className = 'profile-picture'
								src='/profile.jpg' 
								circle />
							</div>
							
						</Col>
			  		<Col lg={8} md={8} className='background-text'>
								I’m a full-stack software developer, currently working in PwC’s Technology Advisory practice. At my current role, I am constantly bridging the gap between technology and business, having to understand all layers of the web stack and interacting with business stakeholders.
								<br></br>
								I have a Computer Science degree from Columbia University, where I built most of my technical background. During my undergraduate course, I learned from the basics of Computer Science up to advanced graduate-level topics such as Natural Language Processing, Machine Learning, Artificial Intelligence, Computer Science Theory, Advanced Programming in the Unix environment, Programming Languages and Translators.								
						</Col>

			  	</Row>
			  </Container>
		)
	}
}

export default Background;