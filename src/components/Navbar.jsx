import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Provider } from 'react-redux'
import store from '../store/store'

const NavBar = () => {
    return (
        <Provider store={store}>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand >টিচার্স বিলিং এসিস্ট্যান্ট</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link to="/billpage" as={Link}>হোম</Nav.Link>
                        <Nav.Link to="/profile" as={Link}>প্রোফাইল</Nav.Link>
                        {/* <Nav.Link to="/billlist" as={Link}> বিলের বিবরণি </Nav.Link> */}
                        <Nav.Link to='/createprofile' as={Link}>নতুন প্রোফাইল</Nav.Link>
                        <Nav.Link to="/abillamount" as={Link}> বিলের পরিমাণ </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <main>
                <Outlet />
            </main>
        </Provider>
    )
}

export default NavBar