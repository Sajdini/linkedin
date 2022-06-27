import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import LoggedInNavLinks from "./nav/LoggedInNavLinks";
import NotLoggedInNavLinks from "./nav/NotLoggedInNavLinks";

const NavBar = () => {
  const isLoggedIn = useSelector((state) => state.authorization.isLoggedIn);

  return (
    <Nav isLoggedin={isLoggedIn}>
      <NavContainer>
        {isLoggedIn ? <LoggedInNavLinks /> : <NotLoggedInNavLinks />}
      </NavContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  padding: 0 4rem;
  background-color: ${(props) => (props.isLoggedin ? "#fff" : "")};
  @media (max-width: 24em) {
    padding: 1rem;
  }
`;

const NavContainer = styled.div`
  padding: 1.2rem 1rem 1.2rem 0;
  max-width: 85%;
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-right: 1px solid #ddd;
  @media (max-width: 24.57em) {
    max-width: 100%;
  }
`;

export default NavBar;
