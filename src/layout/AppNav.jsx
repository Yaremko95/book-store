import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {LinkContainer} from 'react-router-bootstrap'



class AppNav extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Book Store</Navbar.Brand>
                    <Nav className="mr-auto">
                        <LinkContainer to={"/"}>
                            <Nav.Link >Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={"/about"}>
                            <Nav.Link >About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={"/browse"}>
                            <Nav.Link >Browse</Nav.Link>
                        </LinkContainer>


                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Container>
            </Navbar>



        );
    }
}

export default AppNav;