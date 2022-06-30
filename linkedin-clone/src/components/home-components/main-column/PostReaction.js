import React from "react";
import styled from "styled-components";
import { BiLike, BiCommentDetail } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { TiLocationArrowOutline } from "react-icons/ti";
const PostReaction = () => {
  return (
    <Container>
      <Reaction>
        <BiLike />
        <span>Like</span>
      </Reaction>
      <Reaction>
        <BiCommentDetail />
        <span>Comment</span>
      </Reaction>
      <Reaction>
        <FaShare />
        <span>Share</span>
      </Reaction>
      <Reaction>
        <FiSend />
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
  @media (max-width: 18.12em) {
    padding: 0 4px;
  }
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

  @media (max-width: 18.12em) {
    padding: 0;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    span {
      font-size: 1.4rem;
    }
  }
`;

export default PostReaction;
