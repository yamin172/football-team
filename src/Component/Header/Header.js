import { Button, Container } from 'react-bootstrap';
import React from 'react';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to="/" href="#home">
                Football League
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/" href="#home">
                Home
                </Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
            </Container>
        </Navbar>
    );
};

export default Header;