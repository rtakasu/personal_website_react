import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll'


class Topbar extends React.Component {
	constructor(props) {
	    super(props);

	    this.toggle = this.toggle.bind(this);
	    this.state = {
	      isOpen: false
	    };
	  }

	  toggle() {
	    this.setState({
	      isOpen: !this.state.isOpen
	    });
	  }

	render () {
		return (
					<div>
		        <Navbar color="dark" light expand="md" fixed='top'>
		          <NavbarBrand href="/"></NavbarBrand>
		          <NavbarToggler onClick={this.toggle} />
		          <Collapse isOpen={this.state.isOpen} navbar>
		            <Nav className="ml-auto" navbar>
		              <NavItem>
		              	<NavLink><AnchorLink href='#background'>Resume</AnchorLink> </NavLink>
		              </NavItem>
		              <UncontrolledDropdown nav inNavbar>
		                <DropdownToggle nav caret>
		                  About
		                </DropdownToggle>
		                <DropdownMenu right>
		                  <DropdownItem>
		                    <NavLink><AnchorLink href='#background'>Background</AnchorLink> </NavLink>
		                  </DropdownItem>
		                  <DropdownItem>
		                    <NavLink><AnchorLink href='#skills'>Skills</AnchorLink> </NavLink>
		                  </DropdownItem>
		                  <DropdownItem>
		                    <NavLink><AnchorLink href='#experience'>Experience</AnchorLink> </NavLink>
		                  </DropdownItem>
		                  <DropdownItem>
		                    <NavLink><AnchorLink href='#projects'>Projects</AnchorLink> </NavLink>
		                  </DropdownItem>
		                  <DropdownItem>
		                    <NavLink><AnchorLink href='#contact'>Contact</AnchorLink> </NavLink>
		                  </DropdownItem>
		                </DropdownMenu>
		              </UncontrolledDropdown>
		            </Nav>
		          </Collapse>
		        </Navbar>
		      </div>

		)
	}
}

export default Topbar;