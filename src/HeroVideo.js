import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class HeroVideo extends React.Component {
	render () {
		return (
			 <div className='hero-video-container'>
			 	<video autoPlay loop className='hero-video'>
			        <source src="/Love-Coding/MP4/Love-Coding.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
			        <source src="/Love-Coding/WEBM/Love-Coding.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
			      </video>
			   <Container fluid className='hero-grid'>
			    <Row>
			      <Col lg={12} md={12} sm={12} xs={12}>
							<p className='hero-title'>RAFAEL TAKASU</p>
			      </Col>
			    </Row>
			    <Row>
						<div className='hero-break'/>
			    </Row>
			    <Row>
			      <Col lg={12} md={12} sm={12} xs={12}>
							<p className='hero-subtitle'>SOFTWARE ENGINEER</p>
			      </Col>
			    </Row>
			    
			  </Container>
			 </div>
		)
	}
}

export default HeroVideo;