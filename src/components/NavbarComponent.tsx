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
        <StyledBrand href="#home">
          <BrandLink href="#home" onClick={() => dispatch(setAppView("home"))}>
            <i className="fas fa-book-open"></i>
            {"  "}Book Shop
          </BrandLink>
        </StyledBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <StyledLink
              href="#home"
              onClick={() => dispatch(setAppView("home"))}
            >
              Home
            </StyledLink>
            <StyledLink
              href="#cart"
              onClick={() => dispatch(setAppView("cart"))}
            >
              <i className="fas fa-shopping-cart"></i>
            </StyledLink>
          </Nav>
        </Navbar.Collapse>
        <div>
          <Message>Free shipping on orders $45 CAD or more</Message>
        </div>
      </Container>
    </StyledNavbar>
  );
};

const StyledNavbar = styled(Navbar)`
  background-color: #318c8e !important;
`;

const StyledBrand = styled(Navbar.Brand)`
  color: white !important;
  font-family: "Arvo";
  :hover {
    /* border: 1px solid white; */
    font-weight: bold;
  }
  font-size: 40px;
`;

const BrandLink = styled(Nav.Link)`
  color: white !important;
`;

const StyledLink = styled(Nav.Link)`
  color: white !important;
  :hover {
    border: 1px solid white;
  }
`;

const Message = styled.i`
  color: white !important;
  font-size: 16px;
`;
