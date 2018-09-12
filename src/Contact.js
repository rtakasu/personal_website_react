import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaGithubAlt, FaEnvelope, FaPhone, FaLinkedin} from 'react-icons/fa';
import { IconContext } from "react-icons";

class Contact extends React.Component {
	render () {
		return (
			  <Container className='contact'>
			  	<Row>
			  		<Col lg={3} md={3}>
			  			<p>Designed and developed by <span className='contact-name'>Rafael Takasu</span></p>
			  		</Col>
			  		<Col lg={9} md={9}>
			  			<a href='https://github.com/rtakasu/resume/raw/master/Resume.pdf' className='contact-item'>Resume</a>
			  			<a href='https://github.com/rtakasu' className='contact-item'>Github</a>
			  			<a href='https://www.linkedin.com/in/rafael-takasu/' className='contact-item'>Linkedin</a>
			  			<a href='mailto:rafatakasu@gmail.com' className='contact-item'>Email</a>
			  		</Col>
			  	</Row>
			  </Container>
		)
	}
}

export default Contact;