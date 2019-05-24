import React, { Component }    from 'react'
import {Navbar, Nav, NavItem,} from 'react-bootstrap'
import {Link}                  from 'react-router';
import {LinkContainer}         from 'react-router-bootstrap'

/**
 * Page header. Displays a Bootstrap navbar and login/logout buttons
 */
export default class NavBar extends Component {
  render(){
    return (
      <Navbar bg="light">
        <Nav fill className="container">

          <LinkContainer to="/">
            <Navbar.Brand>
              <LinkContainer to="/">
                <img
                  width="30"
                  height="30"
                  className="d-inline-block"
                  src={"/images/icons/mstile-144x144.png"} alt=""
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
