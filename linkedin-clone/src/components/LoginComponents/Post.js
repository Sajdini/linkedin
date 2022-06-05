import React from "react";
import styled from "styled-components";
import { Section, Container } from "../MutualComponents";
const Post = () => {
  return (
    <PostSection color="#fff">
      <Container>
        <Header>Post your job for millions of people to see</Header>
        <PostBtn>Post a job</PostBtn>
      </Container>
    </PostSection>
  );
};

export default Post;

const PostSection = styled(Section)`
  @media (max-width: 64.62em) {
    padding: 10rem 2rem;
  }
`;

const Header = styled.h2`
  margin-top: 0.5rem;
  font-size: 4rem;
  font-weight: 50;
  max-width: 35%;
  line-height: 1.1;
  color: #c15d24;

  @media (max-width: 64.62em) {
    max-width: 80%;
    font-size: 3rem;
  }
`;

const PostBtn = styled.a`
  align-self: center;
  font-size: 1.4rem;
  padding: 1.8rem 1.8rem;
  border-radius: 100px;
  margin-top: 0.5rem;
  font-weight: 700;
  color: #0a66c2;
  box-shadow: inset 0 0 0 1px #0a66c2;
  transition: all 300ms;
  flex-shrink: 0;

  :hover {
    background-color: rgba(112, 181, 249, 0.15);
  }
`;
