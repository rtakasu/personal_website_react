import React, { Component } from 'react';
import SkillItem from './SkillItem.js';
import { Container, Row, Col } from 'reactstrap';

class Skills extends React.Component {
	render () {
		return (
			  <Container>
			  	<Row>
			  		<SkillItem 
			  			title={'Languages'} 
			  			skillList={['Python', 'Javascript', 'Java', 'Objective-C', 'C', 'OCaml']}/>
		  			<SkillItem 
			  			title={'Frameworks'} 
			  			skillList={['Flask', 'React', 'Django', 'Node', 'Jinja']}/>
		  			<SkillItem 
			  			title={'Tools'} 
			  			skillList={['Git', 'XCode', 'Android Studio', 'Webpack', 'Sketch', 'Bash']}/>
		  			<SkillItem 
			  			title={'Platforms'} 
			  			skillList={['Heroku', 'AWS', 'Github', 'Bluemix', 'Watson', '']}/>

			  	</Row>
			  </Container>
		)
	}
}

export default Skills;