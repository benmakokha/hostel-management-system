import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';


function HeadNavBar() {
  
  
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style ={{height:"80px"}}>
      <Navbar.Brand href="#home"style ={{marginLeft:"10px"}}>FREASH HOSTEL</Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Hostel Management" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Freash Hostel Property</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                View Empty Rooms
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">View Rooms</NavDropdown.Item>

              <NavDropdown.Divider />
              

              <NavDropdown.Item href="#action/3.4">
                Add Hostel Rooms
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavLink to ="/CreateAccountForm"  className="link"activeclassName="active">Login</NavLink>
            <NavLink eventKey={2} to ="AdminSettings" className="link"activeclassName="active">
               Administrator Settings
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeadNavBar;