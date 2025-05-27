import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function SimpleNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">E-Shop</Navbar.Brand>
      <Navbar.Toggle  />
      <Navbar.Collapse>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SimpleNavbar;
