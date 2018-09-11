import React, { Component } from 'react';
import AboutItem from './AboutItem.js';
import { Container, Row, Col } from 'reactstrap';


class About extends React.Component {
	render () {
		return (
			  <Container>
			  	<Row>
			  		<AboutItem 
			  			title={'Ready to Ship'} 
			  			text={'You can use this theme as is, or you can make changes!'}
			  			/>
			  		<AboutItem 
			  			title={'Ready to Ship'} 
			  			text={'You can use \n this theme as is, or you can make changes!'}
			  			/>
			  		<AboutItem 
			  			title={'Ready to Ship'} 
			  			text={'You can use this theme as is, or you can make changes!'}
			  			/>
			  		<AboutItem 
			  			title={'Ready to Ship'} 
			  			text={'You can use this theme as is, or you can make changes!'}
			  			/>
			  	</Row>
			  </Container>
		)
	}
}

export default About;