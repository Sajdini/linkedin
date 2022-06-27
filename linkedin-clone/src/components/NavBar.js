import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import LoggedInNavLinks from "./nav/LoggedInNavLinks";
import NotLoggedInNavLinks from "./nav/NotLoggedInNavLinks";

const NavBar = () => {
  const isLoggedIn = useSelector((state) => state.authorization.isLoggedIn);

  return (
    <Nav isLoggedin={isLoggedIn}>
      {isLoggedIn ? <LoggedInNavLinks /> : <NotLoggedInNavLinks />}
    </Nav>
  );
};

const Nav = styled.nav`
  padding: 0 4rem;
  background-color: ${(props) => (props.isLoggedin ? "#fff" : "")};
  @media (max-width: 50em) {
    padding: 1rem;
  }

  @media (max-width: 59.33em) {
    padding: 0;
  }
`;

export default NavBar;
