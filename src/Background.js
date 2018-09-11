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
								src='/Behind-the-screen.jpg' 
								circle />
							</div>
							
						</Col>
			  		<Col lg={8} md={8} className='background-text'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Col>

			  	</Row>
			  </Container>
		)
	}
}

export default Background;