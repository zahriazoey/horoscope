import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'


export default function NavBar() {
    return (
        <div>

            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/horoscope">Horoscope</Nav.Link>
                    <Nav.Link href="https://horoscope-hits.herokuapp.com/login">Music</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}


