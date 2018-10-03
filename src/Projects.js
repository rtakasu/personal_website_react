import React, { Component } from 'react';
import Section from './Section.js';
import Experience from './Experience.js';
import ProjectItem from './ProjectItem.js';
import Contact from './Contact.js';
import { Container, Row, Col } from 'reactstrap';

class Projects extends React.Component {
	render () {
		return (
			<Container>
		  		<Row className='project-item-big'>
				<Col lg={{size:4, order:1}} md={{size:4, order:1}} sm={{order: 2}} xs={{order: 2}} >
					<a className='project-item-title'>BEHOPPY MOBILE APPLICATION</a>
					<p>“beHoppy” application developed in Objective-C that used computer vision to scan beer labels and allow users to log and rate beers. Users can search in the application’s database, which was connected to a Ruby on Rails backend, for beer taste profiles and ratings.</p>
				</Col>
				<Col lg={{size:8, order:2}} md={{size:8, order:2}} sm={{order: 1}} xs={{order: 1}}>
					<img
					className='project-item-image-small-left'
					src='/iphone_behoppy.png'/>
					<img
					className='project-item-image-small-right'
					src='/iphone_behoppy2.png'/>
				</Col>
				</Row>
				<ProjectItem
				title='PERSONAL WEBSITE V2'
				description='This website, made using Reactjs, Reactstrap, Webpack, and Heroku'
				img='/macbook_personalwebsite.png'
				imageSide='right'/>
				<Col lg={12}>
		  			<div>
		  			<p className="section-subheading">Other Projects</p>
		  			<div className='blue-subheading-div'></div>
		  			</div>
		  		</Col>
				<Row>
					<ProjectItem
					title='CHATROOM'
					description='A simple broadcast-like chatroom made with Reactjs for the frontend and Nodejs + Expressjs on the backend. Using sockets, the app allows quick communication between anyone logged into the app.'
					url='https://cryptic-everglades-87817.herokuapp.com/'/>
					<ProjectItem
					title='CHAMPIONS LEAGUE 2018-2019 BRACKET'
					description="A backend made with Python using Flask for creating brackets for the 2018-2019 Champions League. The website supports user login with password and sessions. The backend uses an SQLite database to store the user's bracket info. Frontend in progress."
					url='https://championsleague18-19.herokuapp.com/'/>
				</Row>

				<Row>
					<ProjectItem
					title='BREAK THE STEREO'
					description='Winning project in the Hack4Diversity hackathon. A social network allows users to connect their music streaming services (SoundCloud) and would suggest friend connections based on musical preference. '
					url=''/>
					<ProjectItem
					title='DARN PROGRAMMING LANGUAGE'
					description={<p> Java-like matrix manipulation and image processing language which allows efficient linear algebra calculations. Compiler created using OCaml and C.
						<a style={{'color': '#d8d8d8', 'font-weight': 'bold'}} href='https://github.com/rtakasu/darn_report/blob/master/DARN%20Report.pdf'> Language Reference Manual</a></p>}
					url='https://github.com/ak3703/DARN'/>
				</Row>

				<Row>
					<ProjectItem
					title='PERSONAL WEBSITE V1'
					description='Made with Bootstrap'
					url='http://rafael-takasu.herokuapp.com/'/>
				</Row>


			  </Container>
		)
	}
}

export default Projects;
