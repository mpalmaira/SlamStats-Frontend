import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const TopNav = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="top" className=''> 
      <Container>
        <Navbar.Brand href="#home">SlamStats</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
          <Nav.Link href="#features" className='text-white'>Players</Nav.Link>
          <Nav.Link href="#pricing" className='text-white'>Teams</Nav.Link>
          <Nav.Link href="#pricing" className='text-white'>Leaders</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default TopNav