import React from "react";
import styled from "styled-components";
import { BiLike } from "react-icons/bi";

import { TiLocationArrowOutline } from "react-icons/ti";
const PostReaction = () => {
  return (
    <Container>
      <Reaction>
        <BiLike />
        <span>Like</span>
      </Reaction>
      <Reaction>
        <BiLike />
        <span>Comment</span>
      </Reaction>
      <Reaction>
        <TiLocationArrowOutline />
        <span>Share</span>
      </Reaction>
      <Reaction>
        <TiLocationArrowOutline />
        <span>Send</span>
      </Reaction>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Reaction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  font-size: 1.6rem;
  padding: 1.5rem 0.5rem;
  width: 10rem;
  cursor: pointer;
  border-radius: 8px;
  transition: all 300ms;
  color: #999;

  svg {
    width: 2rem;
    height: 2rem;
  }

  :hover {
    background-color: #ddd;
  }
`;

export default PostReaction;
