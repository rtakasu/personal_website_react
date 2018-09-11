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
			  			<IconContext.Provider value={{ size:'3rem' ,color: "blue", className: "global-class-name" }}>
							  <div className='contact-icons'>
							    <FaGithubAlt />
							  </div>
							  <div className='contact-icons'>
							    <FaLinkedin />
							  </div>
							  <div className='contact-icons'>
							    <FaPhone />
							  </div>
							  <div className='contact-icons'>
							    <FaEnvelope />
							  </div>
							</IconContext.Provider>
			  		</Col>
			  	</Row>
			  </Container>
		)
	}
}

export default Contact;