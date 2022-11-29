import React from 'react';
import { Navbar, NavDropdown, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const { user, isAuthenticated, logout } = useAuth0();
    console.log(user)

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
                                {isAuthenticated && (
                                    <NavDropdown title={user.nickname} id="basic-nav-dropdown">
                                        <NavDropdown.Item>Action</NavDropdown.Item>
                                        <NavDropdown.Item>
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            Something
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item className="text-center">
                                            <Button className="w-100" onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                )}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;