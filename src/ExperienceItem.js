import React, { Component } from 'react';
import { Button, Image, Row, Col, Grid, Jumbotron } from 'react-bootstrap';

class ExperienceItem extends React.Component {
	render (props) {
		return (
			<Row className='experience-item'>
				<Col lg={4} md={4} >
					{this.props.date}
				</Col>
				<Col lg={8} md={8} >
					<h5 className="mb-3">{this.props.title}</h5>
					<p>{this.props.description}</p>
				</Col>
			</Row>
		)
	}
}

export default ExperienceItem;