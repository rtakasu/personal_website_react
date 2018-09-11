import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Hero extends React.Component {
	render () {
		return (
			<div className="bgimage">
			  <Container fluid>
			    <Row>
			      <Col lg={12} md={12} sm={12} xs={12}>
			        <h5>Hello, world! Full width Hero-unit header</h5>
			        <p>This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
			        <p><a href="#" className="btn btn-primary btn-large">Learn more »</a></p>
			      </Col>
			    </Row>
			  </Container>
			</div>
		)
	}
}

export default Hero;