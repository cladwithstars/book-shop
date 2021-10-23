import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useAppDispatch } from "../app/hooks";
import { setAppView } from "../app/slices/localDBSlice";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavbarComponent = () => {
  const dispatch = useAppDispatch();
  return (
    <StyledNavbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Book Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={() => dispatch(setAppView("home"))}>
              Home
            </Nav.Link>
            <Nav.Link href="#cart" onClick={() => dispatch(setAppView("cart"))}>
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

const StyledNavbar = styled(Navbar)`
  background-color: #4682c8 !important;
`;
