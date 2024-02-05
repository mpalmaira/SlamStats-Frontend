import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const TopNav = () => {
  return (
    <Navbar data-bs-theme="dark" className="mb-5">
      <Container>
        <Navbar.Brand href="#home">SlamStats</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home" className="text-white">
            Home
          </Nav.Link>
          <Nav.Link href="#players" className="text-white">
            Players
          </Nav.Link>
          <Nav.Link href="#teams" className="text-white">
            Teams
          </Nav.Link>
          <Nav.Link href="#leaders" className="text-white">
            Leaders
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNav;
