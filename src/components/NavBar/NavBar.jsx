import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './NavBar.module.scss';

const NavBar = ({ bg, variant, session, onDoLogout }) => (
    <Navbar bg={bg} variant={variant} expand="md" className={`px-5 ${styles.NavBar}`} fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">React Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} exact to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/movies">Movies</Nav.Link>
            {!session && <Nav.Link as={NavLink} to="/login">Log in</Nav.Link>}
            {session && <NavDropdown title={session.name} id="user-dropdown">
              <NavDropdown.Item onClick={onDoLogout}>Log out</NavDropdown.Item>
            </NavDropdown>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

NavBar.propTypes = {
  bg: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'light',
    'dark',
    'transparent'
  ]),
  variant: PropTypes.oneOf([
    'dark',
    'light'
  ]),
  session: PropTypes.oneOfType([ PropTypes.object, PropTypes.bool ]),
  onDoLogout: PropTypes.func
};

NavBar.defaultProps = {
  bg: 'transparent',
  variant: 'light',
  session: null,
  onDoLogout: () => {}
};

export default NavBar;