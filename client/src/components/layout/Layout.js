"use strict"
import React from "react";
import {Nav, NavItem, NavBar, Badge} from "react-bootstrap";


class Menu extends React.Component{
    render(){
        return(
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Study Buddy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>   

        );
    }
}
export default Menu