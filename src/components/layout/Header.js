
import React from 'react';
import {Form, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';


function Header(){
    return (
        <Navbar bg='dark' expand='lg'>
            <Navbar.Brand className='text-success' href='/'>Notes Center</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link className='text-white' href="#home">Home</Nav.Link>
                <Nav.Link className='text-white' href="#link">Notes</Nav.Link>
            </Nav>
            <Form inline>
                <Link className='btn btn-outline-success' to='/login' >Login</Link>
            </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}


export default Header;
