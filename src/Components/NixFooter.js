import React from 'react';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
function NixFooter() {
  return (
    <Navbar className='fixed-bottom'>
      <Container>
        <NavbarBrand>Footer</NavbarBrand>
      </Container>
    </Navbar>
  );
}
export default NixFooter;
