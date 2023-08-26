import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import './Shoe.css'

function Navbar1() {
    const MyNav = useNavigate();
  return (
    <>
      <Navbar  className='navbar' data-bs-theme="" sticky='top'>
        <Container>
          <Navbar.Brand className='plashoe' style={{cursor:'pointer'}} onClick={() => MyNav('/')}>PLASHOE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => MyNav('/men')}>MEN</Nav.Link>
            <Nav.Link onClick={() => MyNav( '/women')}>WOMEN</Nav.Link>
            <Nav.Link onClick={() => MyNav('/collection')}>COLLECTION</Nav.Link>
            <Nav.Link onClick={() => MyNav('/lookbook')}>LOOKBOOK</Nav.Link>
            <Nav.Link onClick={() => MyNav('/sale')}>SALE</Nav.Link>
            <Nav.Link onClick={() => MyNav('/cart')}><FaCartShopping/></Nav.Link>
            <Nav.Link onClick={() => MyNav('/login')}><FaUser/></Nav.Link>
           

            
          <Navbar.Collapse className="justify-content-end">
        
            </Navbar.Collapse>
            
          </Nav>
          
        </Container>
      </Navbar>
      
    </>
  );
}

export default Navbar1;