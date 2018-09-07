import React, { Component } from 'react';
import ExperienceItem from './ExperienceItem.js';
import { Button, Image, Row, Col, Grid, Jumbotron } from 'react-bootstrap';

class Experience extends React.Component {
	render () {
		return (
			  <Grid>
			  		<ExperienceItem
							date='Month 1942 - Month2 1999'
							title='EXPERIENCE TITLE BLA BLA'
							description='Experience description, did this and that '/>
						<ExperienceItem
							date='Month 1942 - Month2 1999'
							title='EXPERIENCE TITLE BLA BLA'
							description='Experience description, did this and that '/>
						<ExperienceItem
							date='Month 1942 - Month2 1999'
							title='EXPERIENCE TITLE BLA BLA'
							description='Experience description, did this and that '/>
						<ExperienceItem
							date='Month 1942 - Month2 1999'
							title='EXPERIENCE TITLE BLA BLA'
							description='Experience description, did this and that '/>
						<ExperienceItem
							date='Month 1942 - Month2 1999'
							title='EXPERIENCE TITLE BLA BLA'
							description='Experience description, did this and that '/>
			  </Grid>
		)
	}
}

export default Experience;