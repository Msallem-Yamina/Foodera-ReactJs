import Container from 'react-bootstrap/Container';
import {Button, Nav, Navbar} from 'react-bootstrap';
import { useState, useEffect } from 'react';
// import "./header.css";
import logo from '../../assets/images/logo.png';
import { BsBagHeart, BsPerson } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import Carts from '../UI/cart/Carts';

 const Header = () => {
      const [show, setShow] = useState(false),

       handleClose = () => setShow(false),
       handleShow = () => setShow(true);

       const [hasShadow, setHasShadow] = useState(false);

       useEffect(() => {
         const handleScroll = () => {
           if (window.scrollY > 200) {
             setHasShadow(true);
           } else {
             setHasShadow(false);
           }
         };
         window.addEventListener('scroll', handleScroll);

         return () => {
           window.removeEventListener('scroll', handleScroll);
         };
       });

        return (
            <Navbar collapseOnSelect expand="lg" bg="white" className={`${hasShadow ? 'shadow' : ''} sticky-top`} >
              <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <img
                    src={logo}
                    className="d-block"
                    alt="Logo"
                    />
                </Navbar.Brand>
                <Button className='ms-auto d-lg-none d-block border-0 p-0' variant='none' onClick={handleShow}>                  
                    <BsBagHeart  style={{height: `26px`, width: `40px`, color: '#A82D49'}}/>
                  </Button>
                  <Button className='border-0 p-0 d-lg-none d-block' variant='none'>                  
                    <BsPerson style={{height: `30px`, width: `40px`, color: '#A82D49'}} />
                  </Button>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='shadow-none'/>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mx-auto fw-bold" style={{fontSize: `17px`}}>
                    <Nav.Link as={NavLink} to="/" style={{color:`#A82D49`}} className=''>Home</Nav.Link>
                    <Nav.Link href="#About" style={{color: '#43121D'}}>About Us</Nav.Link>
                    <Nav.Link as={NavLink} to={`/Foods`} style={{color: '#43121D'}}>Explore Foods</Nav.Link>
                    <Nav.Link href="#Reviews" style={{color: '#43121D'}}>Reviews</Nav.Link>
                    <Nav.Link href="#Reviews" style={{color: '#43121D'}}>Contact</Nav.Link>
                    <Nav.Link href="#Fqa" style={{color: '#43121D'}}>FAQ</Nav.Link>
                  </Nav>
                  <Button className='ms-auto border-0 p-0 d-lg-block d-none' variant='none' onClick={handleShow}>                  
                    <BsBagHeart  style={{height: `26px`, width: `40px`, color: '#A82D49'}}/>
                  </Button>
                  <Button className='border-0 p-0 d-lg-block d-none' variant='none'>                  
                    <BsPerson style={{height: `30px`, width: `40px`, color: '#A82D49'}} />
                  </Button>
                </Navbar.Collapse>
                {/* Card */}
                <Carts  Show={show} Close={handleClose} />
              </Container>

            </Navbar>
          );
}

export default Header;
    