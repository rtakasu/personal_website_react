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
			  			<h2 className="section-heading">{this.props.title}</h2>
			  			<hr className='thematic-break'/>
			  		</Col>
			  	</Row>
			  </Container>

			  {this.props.sectionBody}

			</section>
		)
	}
}

export default Section;