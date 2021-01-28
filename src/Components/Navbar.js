import React from 'react';
import logo from '../icons/logo.svg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { faDoorClosed, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NixNav() {
  return (
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
      <Navbar.Collapse
        id='responsive-navbar-nav'
        className='justify-content-end'
      >
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
          <Nav.Link href='#login'>
            Sign Up <FontAwesomeIcon icon={faDoorClosed} />
          </Nav.Link>
          <Nav.Link href='#login'>
            Log In <FontAwesomeIcon icon={faDoorOpen} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NixNav;
