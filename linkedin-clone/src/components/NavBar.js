import React from "react";
import styled from "styled-components";
const NavBar = () => {
  return (
    <Nav>
      <a href="/">
        <img src="/images/login-logo.svg" alt="login logo" />
      </a>
      <div>
        <Join>Join Now</Join>
        <SignIn> Sign In</SignIn>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  max-width: 85%;
  margin: auto;
  padding: 1.2rem 4rem;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 13.5rem;
  }

  @media (max-width: 23em) {
    padding: 1rem;
    & > a {
      padding: 0 0.5rem;
      width: 8rem;
    }
    div {
      display: flex;
      flex-direction: column;
      a {
        margin: 0;
      }
    }
  }
`;

const Join = styled.a`
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.6rem;
  text-decoration: none;
  margin-right: 1.2rem;
  padding: 1rem 1.6rem;
  border-radius: 8px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  border-radius: 24px;
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;

  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  padding: 1rem 2.4rem;

  transition-duration: 167ms;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: #0a66c2;
    color: #fff;
    box-shadow: none;
    text-decoration: none;
  }
`;

export default NavBar;
