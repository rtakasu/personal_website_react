import React, { Component } from 'react';
import SkillItem from './SkillItem.js';
import { Button, Image, Row, Col, Grid, Jumbotron } from 'react-bootstrap';

class Skills extends React.Component {
	render () {
		return (
			  <Grid>
			  	<Row>
			  		<SkillItem 
			  			title={'Ready to Ship'} 
			  			skillList={['Python', 'React', 'Django']}/>
		  			<SkillItem 
			  			title={'Ready to Ship'} 
			  			skillList={['Python', 'React', 'Django']}/>
		  			<SkillItem 
			  			title={'Ready to Ship'} 
			  			skillList={['Python', 'React', 'Django']}/>
		  			<SkillItem 
			  			title={'Ready to Ship'} 
			  			skillList={['Python', 'React', 'Django']}/>

			  	</Row>
			  </Grid>
		)
	}
}

export default Skills;