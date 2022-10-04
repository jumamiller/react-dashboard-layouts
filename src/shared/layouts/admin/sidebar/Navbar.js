import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";

class NavBar extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" expand='md'>
                    <Container fluid className='m-0 p-0'>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        );
    }
}
export default NavBar;
