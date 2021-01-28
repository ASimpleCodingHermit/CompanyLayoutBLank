import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NixTech.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import BasicJumbo from './Components/BasicJumbo';
import NixNav from './Components/Navbar';

function App() {
  return (
    <div className='App'>
      <Container fluid>
        <NixNav />
        <BasicJumbo />
      </Container>
    </div>
  );
}

export default App;
