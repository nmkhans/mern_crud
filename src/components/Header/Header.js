import React from 'react';
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const { isAuthenticated, logout } = useAuth0();
    
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Partdex</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/add-products">Add Product</Nav.Link>
                            <Nav.Link as={Link} to="/manage-products">Manage Product</Nav.Link>
                            <Nav.Link>
                                {
                                    isAuthenticated && (
                                        <Button onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>
                                    )
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;