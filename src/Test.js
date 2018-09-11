import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class Test extends React.Component {
	render () {
		return (
		 	<Navbar>
			  <Navbar.Header>
			    <Navbar.Brand>
			      <a href="#home">React-Bootstrap</a>
			    </Navbar.Brand>
			  </Navbar.Header>	
			</Navbar>
		)
	}
}

export default Test;