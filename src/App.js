// import logo from './logo.svg';
import './App.css';
import './NixTech.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>
          <img
            src='/logo.svg'
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt='React Bootstrap logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
            <NavDropdown title='Templates' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#template/1.1'>
                Basic Ecommerce
              </NavDropdown.Item>
              <NavDropdown.Item href='#template/2.1'>
                ReactJS Ecommerce App
              </NavDropdown.Item>
              <NavDropdown.Item href='#template/3.1'>
                Flask Ecommerce Application
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#template/4.1'>
                Separated link
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
    </div>
  );
}

export default App;
