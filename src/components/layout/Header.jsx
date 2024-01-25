import React from 'react';
import { logout } from '../../api/auth';
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import PropTypes from 'prop-types';

function Header({ isLogged, onLogout }) {
  const [showOffcanvas, setShowOffcanvas] = React.useState(false);

  const handleLogoutClick = () => {
    logout().then(onLogout);
    setShowOffcanvas(false);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="fixed-top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            TypeMasteryHub
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setShowOffcanvas(true)} />
        </Container>
      </Navbar>

      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="end"
        className="bg-dark text-white"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>TypeMasteryHub</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/courses" className="text-white">
              Courses
            </Nav.Link>
            <hr />
            {!isLogged ? (
              <>
                <Nav.Link as={Link} to="/login" className="text-white">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register" className="text-white">
                  Register
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="#user" className="text-white">
                  My courses
                </Nav.Link>
                <Nav.Link href="#user" className="text-white">
                  Edit profile
                </Nav.Link>
                <Nav.Link onClick={handleLogoutClick} className="text-white">
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

Header.propTypes = {
  isLogged: PropTypes.bool,
  onLogout: PropTypes.func,
};

export default Header;
