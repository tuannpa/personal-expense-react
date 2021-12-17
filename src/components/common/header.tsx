import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header: React.FC = (): React.ReactElement => {
    return (
        <Navbar bg="light" expand="md">
            <Container>
                <Navbar.Brand as={Link} to="/">Personal Expense Portal</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/expense">Expense</Nav.Link>
                </Nav>
                <Navbar.Text>
                    Signed in as: <Link to="/user">Tuan Nguyen</Link>
                </Navbar.Text>
            </Container>
        </Navbar>
    );
}

export default Header;