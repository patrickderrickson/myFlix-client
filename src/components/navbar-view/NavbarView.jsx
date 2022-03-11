import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './NavbarView.scss';

export default function NavbarView(props) {
    console.log(props)
    const onLoggedout = () => {
        localStorage.clear();
        window.open('/', '_self');
    };

    const isAuth = () => {
        if (typeof window == "undefined") {
            return false;
        }
        if (localStorage.getItem("token")) {
            return localStorage.getItem("token");
        } else {
            return false;
        }
    };

    return (
        <Navbar className="main-nav" sticky="top" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand className="navbar-logo" style={{color: 'black'}} href="/">MovieFlix</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        {isAuth() && (
                            <Nav.Link style={{color: 'blue'}} href="/profile">{localStorage.getItem('user')}</Nav.Link>
                        )}
                        {isAuth() && (
                            <Button variant="link" onClick={() => {
                                onLoggedOut()
                            }}>Logout</Button>
                        )}
                        {!isAuth() && (
                            <Nav.Link href="/">Login</Nav.Link>
                        )}
                        {!isAuth() && (
                            <Nav.Link href="/register">Register</Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}