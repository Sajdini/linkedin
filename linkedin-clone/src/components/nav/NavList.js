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
    <>
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
          <Link to="/Notifications">
            <BsBellFill />
            <span>Notifications</span>
          </Link>
        </Item>
      </List>
    </>
  );
};

export default NavList;

const List = styled.ul`
  color: white;
  text-decoration: none;
  display: flex;
  gap: 3rem;
  position: relative;
`;

const Item = styled.li`
  width: 3rem;
  font-size: 1.5rem;
  text-align: center;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

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
`;
