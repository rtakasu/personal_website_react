import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class ProjectItem extends React.Component {
	render (props) {
		if (this.props.imageSide === 'right') {
			return (
				<Row className='project-item-big'>
					<Col lg={{size:4, order:1}} md={{size:4, order:1}} sm={{order: 2}} xs={{order: 2}} >
						<a href={this.props.url} className='project-item-title'>{this.props.title}</a>
						<p>{this.props.description}</p>
					</Col>
					<Col lg={{size:8, order:2}} md={{size:8, order:2}} sm={{order: 1}} xs={{order: 1}}>
						<img 
						className='project-item-image'
						src={this.props.img}/>
					</Col>
				</Row>
			)
		} else if (this.props.imageSide === 'left') {
			return (
				<Row className='project-item-big'>
					<Col lg={{size:4, order:2}} md={{size:4, order:2}} sm={{order: 2}} xs={{order: 2}} >
						<a href={this.props.url} className='project-item-title'>{this.props.title}</a>
						<p>{this.props.description}</p>
					</Col>
					<Col lg={{size:8, order:1}} md={{size:8, order:1}} sm={{order: 1}} xs={{order: 1}}>
						<img 
						className='project-item-image'
						src={this.props.img}/>
					</Col>
				</Row>
			)
		} else {
			return (
					<Col lg={{size:6}} md={{size:6}}>
						<a href={this.props.url} className='project-item-title'>{this.props.title}</a>
						<p>{this.props.description}</p>
					</Col>

				)

		}
		
	}
}

export default ProjectItem;