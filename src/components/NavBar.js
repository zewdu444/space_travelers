import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../asset/planet.png';
import '../App.css';

function NavBar() {
  return (
    <div>
      <Navbar bg="white" expand="lg" className="px-5">
        <Navbar.Brand to="/" as={Link} className="fs-2 fw-medium">
          <img alt="planet log" src={logo} width={55} height={55} />
          {'  '}
          Space Traveler&#39;s Hub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="fs-5 navList">
            <NavLink className="nav-link" to="/" as={Link}>Rockets</NavLink>
            <NavLink className="nav-link" to="/missions" as={Link}>Missions</NavLink>
            <div className="d-none d-md-none d-lg-block mt-3 mb-3 vr" />
            <NavLink className="nav-link" to="/myprofile" as={Link}>My profile</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr />
    </div>
  );
}

export default NavBar;
