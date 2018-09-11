import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Section extends React.Component {
	render (props) {
		return (
			<section 
				id={this.props.id} 
				className='section'
				style={{backgroundColor: this.props.background}}>
			  <Container>
			  	<Row>
			  		<Col lg={12}>
			  			<div>
			  			<p className="section-heading">{this.props.title}</p>
			  			<div className='blue-heading-div'></div>
			  			</div>	
			  		</Col>
			  	</Row>
			  </Container>

			  {this.props.sectionBody}

			</section>
		)
	}
}

export default Section;