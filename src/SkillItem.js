import React, { Component } from 'react';
import { Button, Image, Row, Col, Grid, Jumbotron } from 'react-bootstrap';

class SkillItem extends React.Component {
	render (props) {
		return (
			<Col lg={3} md={6} className='skill-item'>
				<div>
					<i className="fa fa-4x fa-diamond text-primary mb-3 sr-icons"></i>
				  <h3 className="mb-3">{this.props.title}</h3>
				  {this.props.skillList.map((item) =>
				  		<p key={item} className="text-muted mb-0">{item}</p>		
				  	)}
				  
				 </div>
			</Col>
		)
	}
}

export default SkillItem;