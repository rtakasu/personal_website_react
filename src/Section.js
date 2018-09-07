import React, { Component } from 'react';
import { Button, Image, Row, Col, Grid, Jumbotron } from 'react-bootstrap';

class Section extends React.Component {
	render (props) {
		return (
			<section 
				id={this.props.id} 
				className='section'
				style={{backgroundColor: this.props.background}}>
			  <Grid>
			  	<Row>
			  		<Col lg={12}>
			  			<h2 className="section-heading">{this.props.title}</h2>
			  			<hr className='thematic-break'/>
			  		</Col>
			  	</Row>
			  </Grid>

			  {this.props.sectionBody}

			</section>
		)
	}
}

export default Section;