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
			  			<p className='contact-item'>Resume</p>
			  			<p className='contact-item'>Github</p>
			  			<p className='contact-item'>Linkedin</p>
			  			<p className='contact-item'>Email</p>
			  		</Col>
			  	</Row>
			  </Container>
		)
	}
}

export default Contact;