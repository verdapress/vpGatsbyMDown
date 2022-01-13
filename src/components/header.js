import * as React from "react";
import PropTypes from "prop-types";
import {Link} from "gatsby";
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

export default (props) => (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">{siteTitle}</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as ={Link} to="/">Home
          </Nav.Link>
          <Nav.Link> as ={Link} to="/about">About us
          </Nav.Link>
          <Nav.Link as ={Link} to="/contact">Contact Us
          </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
