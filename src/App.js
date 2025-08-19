import logo from './logo.svg';
import './App.css';
import HaircutStuff from './components/HaircutStuff';
import { useState } from 'react';
import HomePage from './components/HomePage';
import { BASIC_SERVICES } from './components/BASIC_SERVICE';
import RandomPage from './components/RandomPage';
import { Route, Routes, Link } from 'react-router-dom'
import HaircutPage from './components/HaircutPage';
import { Nav, Navbar, Container } from 'react-bootstrap';


function App() {

  const [servicesList, setServicesList] = useState(BASIC_SERVICES)

  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Haircuts!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/random'>Random</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      <Container className='mt-4'>
      <Routes>
        <Route path='/' element={<HomePage servicesList={servicesList} />} />
        <Route path='/random' element={<RandomPage servicesList={servicesList} />} />
        <Route path='/haircut/:haircutId' element={<HaircutPage servicesList={servicesList} />} />
      </Routes>
      </Container>
      
      
    </div >
  );
}

export default App;
