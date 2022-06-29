import React from "react";
import styled from "styled-components";
import UserBadge from "../right-column/UserBadge";
import PostReaction from "./PostReaction";
const PostComponent = () => {
  return (
    <Container>
      <PostAuthor>
        <UserBadge followLink />
      </PostAuthor>
      <PostText>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </PostText>
      <ReactionIcons>
        <ul>
          <li>
            <img src="/images/like-icon.png" />
          </li>
        </ul>
        <span>9</span>
      </ReactionIcons>
      <Divider />
      <PostReaction />
    </Container>
  );
};
const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0rem;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  padding-bottom: 5px;
`;

const PostAuthor = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostText = styled.div`
  padding: 0 1rem;

  p {
    color: #333;
    letter-spacing: 1.01px;
    font-size: 1.2rem;
  }
`;

const ReactionIcons = styled.div`
  padding: 0 1rem;
  display: flex;
  gap: 2px;
  align-items: center;

  ul {
    list-style: none;
    li {
      padding: 3px;
      border-radius: 50%;
      box-shadow: inset 0 0 0 1px #999;
      max-width: 1.4rem;
      max-height: 1.4rem;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        color: white;
      }
    }
  }

  span {
    font-size: 1.2rem;
  }
`;
const Divider = styled.div`
  border-top: 1px solid #ddd;
  width: 96%;
  align-self: center;
`;

export default PostComponent;
