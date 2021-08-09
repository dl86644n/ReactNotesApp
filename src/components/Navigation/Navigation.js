import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavigationCSS from "./Navigation.module.css";

class Navigation extends Component {
  render() {
      const navText = {
          color: "white",
      }
    return (
      <div>
        <Navbar className={NavigationCSS.navBar}>
          <Container>
            <Nav.Link href="/Login" style={navText}>Login</Nav.Link>
            <Nav.Link href="/createnotes" style={navText}>Create a Note</Nav.Link>
            <Nav.Link href="/getnotes" style={navText}>List all Notes</Nav.Link>
            <Nav.Link href="" style={navText}>Log Out</Nav.Link>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
