import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavList from "./NavList";

const LoggedInNavLinks = () => {
  return (
    <NavContainer>
      <LogoAndSearchContainer>
        <Link to={"/home"}>
          <img src="/images/linkedin.png" alt="logo" />
        </Link>
        <input />
      </LogoAndSearchContainer>
      <NavList />
    </NavContainer>
  );
};

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
  @media (max-width: 59.33em) {
    max-width: 100%;
    padding: 1.2rem 0;
  }
`;

const LogoAndSearchContainer = styled.div`
  display: flex;
  gap: 1rem;

  input {
    border: none;
    background: transparent
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
      no-repeat 13px center;
    padding: 9px 4px 9px 40px;
    background-color: #f1f2f8;
  }

  @media (max-width: 43.75em) {
    justify-content: space-around;
    width: 100%;

    input {
      width: 80%;
      margin-right: 1rem;
    }
  }
`;

export default LoggedInNavLinks;
