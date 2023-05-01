import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function NavigationBar({ activeSection }) {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
      <div className="container-fluid navbar-container">
        <Navbar.Brand href="#">
          <div className="brand-logo"></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" active={activeSection === 0}>
              Home
            </Nav.Link>
            <Nav.Link href="#services" active={activeSection === 1}>
              Services
            </Nav.Link>
            <Nav.Link href="#projects" active={activeSection === 2}>
              Projects
            </Nav.Link>
            <Nav.Link href="#about" active={activeSection === 3}>
              About
            </Nav.Link>
            <Nav.Link href="#contact" active={activeSection === 4}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
