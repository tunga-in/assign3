
import React, { useContext } from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../util/context/AuthContext';


function Header(){
    const { isLoggedin } = useContext(AuthContext);

    return (
        <Navbar bg='dark' expand='lg'>
            <Navbar.Brand className='text-success' href='/'>Notes Center</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </Nav>
            <Nav>
                <Nav.Link className='text-white' href="/">Home</Nav.Link>
                <Nav.Link className='text-white' href="/notes">Notes</Nav.Link>
                {
                    isLoggedin && 
                    <>
                        <Nav.Link className='text-white' href="/add_note">Add Note</Nav.Link>
                        <Nav.Link className='text-white' href="/my_notes">My Notes</Nav.Link>
                        <Nav.Link className='text-white' href="/profile">Profile</Nav.Link>
                    </>
                }
                <Link className='btn btn-outline-success' to='/login' >Login</Link>
            </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
}


export default Header;
