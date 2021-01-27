import './App.css';
import logo from './icons/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NixTech.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import BasicJumbo from './Components/BasicJumbo';

function App() {
  return (
    <div className='App'>
      <Container fluid>
        <Navbar collapseOnSelect expand='lg'>
          <Navbar.Brand href='#home'>
            <img
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt=''
            />{' '}
            NixTech
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
              <Nav.Link href='#features'>Features</Nav.Link>
              <Nav.Link href='#pricing'>Pricing</Nav.Link>
              <NavDropdown title='Templates' id='collapsible-nav-dropdown'>
                <NavDropdown.Item href='#template/1.1'>
                  Basic Ecommerce
                </NavDropdown.Item>
                <NavDropdown.Item href='#template/2.1'>
                  ReactJS Ecommerce App
                </NavDropdown.Item>
                <NavDropdown.Item href='#template/3.1'>
                  Flask Ecommerce Application
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href='#deets'>More deets</Nav.Link>
              <Nav.Link eventKey={2} href='#memes'>
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <BasicJumbo />
      </Container>
    </div>
  );
}

export default App;
