import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import logo from '../assets/img/netflix_logo.png'
import kids from '../assets/img/kids_icon.png'
import avatar from '../assets/img/avatar.png'
import searchIcon from '../assets/img/svg/search-icon.svg'
import bellIcon from '../assets/img/svg/notification-icon.svg'

function AppNavbar() {
  return (
    <header>
      <Navbar expand="lg" className="bg-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} alt="Netflix logo" width="100" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavDropdown" />
          <Navbar.Collapse id="navbarNavDropdown">
            <Nav className="me-auto">
              <Nav.Link href="#" active>
                Home
              </Nav.Link>
              <Nav.Link href="#">Tv Shows</Nav.Link>
              <Nav.Link href="#">Movies</Nav.Link>
              <Nav.Link href="#">Recently Added</Nav.Link>
              <Nav.Link href="#">My List</Nav.Link>
            </Nav>
            <Nav className="d-lg-none">
              <Nav.Link href="#">Kids</Nav.Link>
              <Nav.Link href="#">Notifications</Nav.Link>
              <NavDropdown title="Personal Profile" id="nav-dropdown">
                <NavDropdown.Item href="#" target="_blank">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Settings</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto d-none d-lg-flex align-items-center">
              <Form className="d-none d-lg-flex" id="search-form">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                />
              </Form>
              <Button className="btn-icon">
                <img src={searchIcon} alt="search-icon" />
              </Button>
              <Nav.Link href="#">
                <img src={kids} alt="kids icon" width="40" />
              </Nav.Link>
              <Nav.Link href="#">
                <img src={bellIcon} alt="bell-icon" />
              </Nav.Link>
              <NavDropdown
                title={<img src={avatar} alt="Avatar" width="40" />}
                id="nav-profile-dropdown"
                align="end"
              >
                <NavDropdown.Item href="#" target="_blank">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Settings</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default AppNavbar
