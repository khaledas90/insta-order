import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../img/logo.png";
import Buttons from "../../common/btn/Buttons";
export default function Header() {
  return (
    <div className="header">
      <Navbar expand="lg">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img src={logo} alt="logo img" className="logo" />
          <h2 className="ms-2">INSTA ORDER</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-around"
        >
          <Nav className="me-auto navLink">
            <Nav.Link href="#" aria-current="page">
              <Link exact="true" to="/">
                HOME
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link exact="true" to="/BePartner">
                BE A PARTNER
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link exact="true" to="/About">
                ABOUT US
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            {" "}
            <Buttons />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
