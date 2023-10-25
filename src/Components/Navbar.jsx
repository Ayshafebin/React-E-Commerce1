import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar, Dropdown} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import './Shoe.css'
import { useContext } from 'react';
import { MyContext } from './Context';
import Search from './search';


function Navbar1() {
    const MyNav = useNavigate();
    const {login,username,setLogin,setUsername}=useContext(MyContext)
    const logout=()=>{
      setLogin(false)
      setUsername("")
      
    }
  return (
    <>
      <Navbar  className='navbar' data-bs-theme="" sticky='top'>
        <Container>
          <Navbar.Brand className='plashoe' style={{cursor:'pointer'}} onClick={() => MyNav('/')}>PLASHOE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => MyNav('/men')}>MEN</Nav.Link>
            <Nav.Link onClick={() => MyNav( '/women')}>WOMEN</Nav.Link>
            <Nav.Link onClick={() => MyNav('/collection')}>COLLECTION</Nav.Link>
            <Nav.Link onClick={() => MyNav('/cart')}><FaCartShopping/></Nav.Link>
            <Nav.Link >

            <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <FaUser/>
      </Dropdown.Toggle>
      <Dropdown.Menu>
      { (login==false)? 
      
        <>
        <Dropdown.Item onClick={()=>{MyNav('/regestration')}}>Sign Up</Dropdown.Item>
        <Dropdown.Item onClick={()=>{MyNav('/login')}}>Login</Dropdown.Item>

        </>
:  <>
<Dropdown.Item href="#/action-2">{username}</Dropdown.Item>
        <Dropdown.Item onClick={logout}>logout</Dropdown.Item>
        </>  
        
     } </Dropdown.Menu>
    </Dropdown>
            </Nav.Link>
          <Navbar.Collapse className="justify-content-end">
        
            </Navbar.Collapse>
            
          </Nav>
          <Search/>

          
        </Container>
      </Navbar>
      
    </>
  );
}

export default Navbar1;