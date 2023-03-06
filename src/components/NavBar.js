import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../asset/planet.png';

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
          <Nav className="text-primary fs-5">
            <Nav.Link
              className="text-primary pe-5"
              to="/"
              activeClassName="underline"
              as={Link}
            >
              Rockets

            </Nav.Link>
            <Nav.Link className="text-primary" to="/missions" as={Link}>Missions</Nav.Link>
            <div className="d-none d-md-none d-lg-block mt-3 mb-3 vr" />
            <Nav.Link className="text-primary" to="/myprofile" as={Link}>My profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr />
    </div>
  );
}

export default NavBar;
