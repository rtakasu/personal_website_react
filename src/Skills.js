import React, { Component } from 'react';
import SkillItem from './SkillItem.js';
import { Container, Row, Col } from 'reactstrap';

class Skills extends React.Component {
	render () {
		return (
			  <Container>
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
			  </Container>
		)
	}
}

export default Skills;