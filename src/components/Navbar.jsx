import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavBar = () => {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand >Teacher's Billing Assistant</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link to="/billpage" as={Link}>Home</Nav.Link>
                        <Nav.Link to="/profile" as={Link}>Profiles</Nav.Link>
                        <Nav.Link href="/billlist" as={Link}>Billlist</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default NavBar