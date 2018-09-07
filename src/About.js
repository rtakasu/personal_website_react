import React, { Component } from 'react';
import AboutItem from './AboutItem.js';
import { Button, Image, Row, Col, Grid, Jumbotron } from 'react-bootstrap';

class About extends React.Component {
	render () {
		return (
			  <Grid>
			  	<Row>
			  		<AboutItem 
			  			title={'Ready to Ship'} 
			  			text={'You can use this theme as is, or you can make changes!'}
			  			/>
			  		<AboutItem 
			  			title={'Ready to Ship'} 
			  			text={'You can use this theme as is, or you can make changes!'}
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
			  </Grid>
		)
	}
}

export default About;