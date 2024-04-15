import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
        <Navbar className="bg-transparent">
        <Container>
          <Navbar.Brand href="#home">
          <span style={{fontSize:'40px',color:'white'}}>
            <span style={{fontSize:'40px',color:'orange'}}>M</span>y
             <span style={{fontSize:'40px',color:'orange'}} className='ms-3'>P</span>ortfolio
          </span>
          </Navbar.Brand>
        </Container>
          </Navbar>
    </>
  )
}

export default Header