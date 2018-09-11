import React, { Component } from 'react';
import ExperienceItem from './ExperienceItem.js';
import { Container, Row, Col } from 'reactstrap';

class Experience extends React.Component {
	render () {
		return (
			  <Container>
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
			  </Container>
		)
	}
}

export default Experience;