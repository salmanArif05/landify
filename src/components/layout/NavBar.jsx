import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SecondaryBtn from '../Buttons/SecondaryBtn';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import './defaultStyle.css';

const NavBar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" className='py-3'>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
                        <Nav className="">
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="#">Pricing</Nav.Link>
                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav>
                        <Navbar.Brand href="#"><img src="/assets/images/nav-logo.png" alt="" /></Navbar.Brand>
                        <div className="d-flex gap-3">
                            <SecondaryBtn text="Login" />
                            <PrimaryBtn text="Sign up" />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar