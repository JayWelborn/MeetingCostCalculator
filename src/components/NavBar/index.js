import React, { Component }    from 'react'
import {Navbar, Nav, NavItem,} from 'react-bootstrap'
import {Link}                  from 'react-router';
import {LinkContainer}         from 'react-router-bootstrap'

import logo from './logo.png'

/**
 * Page header. Displays a Bootstrap navbar and login/logout buttons
 */
export default class NavBar extends Component {
  render(){
    return (
      <Navbar bg="light">
        <Nav className="container">

          <LinkContainer to="/">
            <Navbar.Brand>
              <LinkContainer to="/">
                <img
                  width="30"
                  height="30"
                  className="d-inline-block"
                  src={logo} alt="Calculator Logo"
                 />
              </LinkContainer>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Collapse>

            <LinkContainer exact activeClassName="active" to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer activeClassName="active" to="/calculator">
              <Nav.Link>Calculator</Nav.Link>
            </LinkContainer>

          </Navbar.Collapse>
        </Nav>
      </Navbar>
    );
  }
}
