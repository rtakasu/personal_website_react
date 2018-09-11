import React, { Component } from 'react';
import { Col } from 'reactstrap';

class AboutItem extends React.Component {
	render (props) {
		return (
			<Col lg={3} md={6}>
				<div>
					<i class="fa fa-4x fa-diamond text-primary mb-3 sr-icons"></i>
				  <h3 class="mb-3">{this.props.title}</h3>
				  <p class="text-muted mb-0">{this.props.text}</p>
				 </div>
			</Col>
		)
	}
}

export default AboutItem;