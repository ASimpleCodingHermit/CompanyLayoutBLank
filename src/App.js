import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NixTech.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import BasicJumbo from './Components/BasicJumbo';
import BasicCard from './Components/BasicCard';
import NixNav from './Components/NixNav';
import { Row } from 'react-bootstrap';
import NixFooter from './Components/NixFooter';

function App() {
  return (
    <div className='App'>
      <Container fluid>
        <NixNav />
        <BasicJumbo />
        <Row id='cardRow'>
          <BasicCard />
          <BasicCard />
          <BasicCard />
          <BasicCard />
        </Row>
        <NixFooter />
      </Container>
    </div>
  );
}

export default App;
