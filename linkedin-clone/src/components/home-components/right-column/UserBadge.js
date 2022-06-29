import React from "react";
import styled from "styled-components";
import profile from "../../../profile.JPEG";
import { GrAdd } from "react-icons/gr";
const UserBadge = (props) => {
  return (
    <>
      <Container>
        <Image>
          <img src={profile} alt="suggested" />
        </Image>
        <AccountInfo>
          <h3>Samir Ajdini</h3>
          <p>Junior Reactjs && Front-End developer</p>
          {props.button && (
            <FollowBtn href="#">
              <GrAdd /> Follow
            </FollowBtn>
          )}
        </AccountInfo>
      </Container>
      {props.followLink && (
        <FollowLink>
          <GrAdd />
          Follow
        </FollowLink>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const Image = styled.div`
  width: 5rem;
  height: 5rem;
  align-self: flex-start;
  cursor: pointer;
  img {
    max-width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const AccountInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #666;
    cursor: pointer;
  }
  p {
    font-size: 1.15rem;
    letter-spacing: 0.9px;
    color: #999;
    cursor: pointer;
  }
`;

const FollowBtn = styled.a`
  text-decoration: none;
  border: 1px solid #999;
  max-width: 8rem;
  font-size: 1.6rem;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  color: #777;
  display: flex;
  align-items: center;
  gap: 1px;
  transition: all 300ms;
  :hover {
    background-color: #ddd;
  }
`;
const FollowLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1px;
  color: #0d72a6;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 300ms;
  padding: 1rem;
  border-radius: 8px;
  svg path {
    stroke: #0d72a6;
  }
  :hover {
    background-color: #9ec7db;
  }
`;

export default UserBadge;
