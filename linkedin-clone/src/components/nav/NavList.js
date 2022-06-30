import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { ImHome3 } from "react-icons/im";
import {
  BsPeopleFill,
  BsBriefcaseFill,
  BsChatRightDotsFill,
  BsBellFill,
} from "react-icons/bs";

const NavList = () => {
  return (
    <List>
      <Item>
        <Link to="/home">
          <ImHome3 />
          <span>Home</span>
        </Link>
      </Item>
      <Item>
        <Link to="/network">
          <BsPeopleFill />
          <span>Network</span>
        </Link>
      </Item>
      <Item>
        <Link to="/jobs">
          <BsBriefcaseFill />
          <span>Jobs</span>
        </Link>
      </Item>
      <Item>
        <Link to="/messaging">
          <BsChatRightDotsFill />
          <span>Messaging</span>
        </Link>
      </Item>
      <Item>
        <Link to="/Notifications" style={{ marginRight: "1rem" }}>
          <BsBellFill />
          <span>Notifications</span>
        </Link>
      </Item>
    </List>
  );
};

export default NavList;

const List = styled.ul`
  text-decoration: none;
  display: flex;
  gap: 1rem;
  position: relative;

  @media (max-width: 43.75em) {
    background-color: #fff;
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 20;
    justify-content: space-around;
    padding: 0;
    border-top: 0.5px solid #ddd;
    li {
      padding: 5px 0;
    }
  }

  @media (max-width: 20.5em) {
    gap: 0;
    flex-shrink: 1;
  }
`;

const Item = styled.li`
  width: 3rem;
  font-size: 1.5rem;
  text-align: center;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  transition: all 300ms;
  a {
    text-decoration: none !important ;
    color: #444;
    position: relative;

    &::before {
      display: none;
      content: "";
      border-bottom: 2px solid;
      bottom: 0;
      left: 0;
      position: absolute;
      width: 100%;
      border-color: #333;
    }

    :active,
    :focus {
      &::before {
        display: block;
      }
    }
  }

  span {
    display: block;
  }

  :hover {
    background-color: #ddd;
  }
`;
