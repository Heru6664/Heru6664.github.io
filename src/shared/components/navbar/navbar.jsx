import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Navbar, Container, Nav } from "react-bootstrap";

export default class AppNavbar extends Component {
  constructor() {
    super();
    this.state = {
      menu: [
        { path: "home", title: "Home" },
        { path: "about", title: "About" },
        { path: "portofolio", title: "Portofolio" },
        { path: "contact", title: "Contact" },
        { path: "resume", title: "Resume" }
      ]
    };
  }

  render() {
    return (
      <Navbar bg="transparent" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Silver Winter</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {this.state.menu.map((i, index) => {
                return (
                  <Nav.Item key={index}>
                    <AnchorLink className="nav-link" href={`#${i.path}`}>
                      {i.title}
                    </AnchorLink>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
