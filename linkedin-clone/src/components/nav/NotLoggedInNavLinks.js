import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../../store/authSlice";
import styled from "styled-components";

const NotLoggedInNavLinks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authSliceActions.login());
    navigate("/home");
  };

  return (
    <NavContainer>
      <Logo href="/">
        <img src="/images/login-logo.svg" alt="login logo" />
      </Logo>
      <AuthContainer>
        <Join>Join Now</Join>
        <SignIn onClick={loginHandler}> Sign In</SignIn>
      </AuthContainer>
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
  @media (max-width: 24.57em) {
    max-width: 100%;
  }
`;

const Logo = styled.a`
  width: 13.5rem;

  @media (max-width: 24em) {
    padding: 1rem;
    & > a {
      padding: 0 0.5rem;
      width: 8rem;
    }
  }
`;

const AuthContainer = styled.div`
  @media (max-width: 23em) {
    display: flex;
    flex-direction: column;
    a {
      margin: 0;
      padding: 0.5 1rem;
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

export default NotLoggedInNavLinks;
