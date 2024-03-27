import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleClick = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="md" className="bg-body-tertiary" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#home">Corporate</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggleClick}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={handleLinkClick}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" onClick={handleLinkClick}>
              About
            </Nav.Link>
            <Nav.Link href="#services" onClick={handleLinkClick}>
              Services
            </Nav.Link>
            <Nav.Link href="#works" onClick={handleLinkClick}>
              Works
            </Nav.Link>
            <Nav.Link href="#teams" onClick={handleLinkClick}>
              Teams
            </Nav.Link>
            <Nav.Link href="#testimonials" onClick={handleLinkClick}>
              Testimonials
            </Nav.Link>
            <Nav.Link href="#pricing" onClick={handleLinkClick}>
              Pricing
            </Nav.Link>
            <Nav.Link href="#blog" onClick={handleLinkClick}>
              Blog
            </Nav.Link>
            <Nav.Link href="#contact" onClick={handleLinkClick}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
