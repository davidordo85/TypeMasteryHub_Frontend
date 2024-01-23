//import React from 'react';
import { logout } from '../../api/auth';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import PropTypes from 'prop-types';
//TODO: simple navbar, add thinks

function Header({ isLogged, onLogout }) {
  const handleLogoutClick = () => {
    logout().then(onLogout);
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">TypeMasteryHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#courses">Courses</Nav.Link>
          </Nav>
          <Nav className="">
            <NavDropdown
              title={<FaUser />}
              id="basic-nav-dropdown"
              align={{ lg: 'end' }}
            >
              {!isLogged ? (
                <>
                  <NavDropdown.Item as={Link} to="/login">
                    Login
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/register">
                    Register
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item href="#user">My courses</NavDropdown.Item>
                  <NavDropdown.Item href="#user">Edit profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogoutClick}>
                    Logout
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

Header.propTypes = {
  isLogged: PropTypes.bool,
  onLogout: PropTypes.func,
};

export default Header;
