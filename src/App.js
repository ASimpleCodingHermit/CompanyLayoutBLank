// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropDown';

function App() {
  return (
    <div className='App'>
      <Navbar expand='xl' variant='light' bg='info' id='Navbar'>
        <Container>
          <Navbar.Brand href='#' className='ml-3'>
            NixTech
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link>Home</Nav.Link>
              <NavDropdown title='Products' id='productDropDown'>
                <NavDropdown.Item href='product1.html'>
                  Product 1
                </NavDropdown.Item>
                <NavDropdown.Item href='product2.html'>
                  Product 2
                </NavDropdown.Item>
                <NavDropdown.Item href='product3.html'>
                  Product 3
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>Pricing</Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Contact Us</Nav.Link>
              <Nav.Link>Login</Nav.Link>
              <Nav.Link>Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
