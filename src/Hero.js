import React, { Component } from 'react';
import { Button, Image, Row, Col, Grid, Jumbotron } from 'react-bootstrap';

class Hero extends React.Component {
	render () {
		return (
			<div class="bgimage">
			  <Grid fluid>
			    <Row>
			      <Col lg={12} md={12} sm={12} xs={12}>
			        <h5>Hello, world! Full width Hero-unit header</h5>
			        <p>This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
			        <p><a href="#" class="btn btn-primary btn-large">Learn more »</a></p>
			      </Col>
			    </Row>
			  </Grid>
			</div>
		)
	}
}

export default Hero;