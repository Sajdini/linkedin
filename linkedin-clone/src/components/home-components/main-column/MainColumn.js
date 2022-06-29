import React from "react";
import styled from "styled-components";
import CreatePostComponent from "./CreatePostComponent";
import { IoMdArrowDropdown } from "react-icons/io";
import PostComponent from "./PostComponent";

const MainColumn = () => {
  return (
    <Container>
      <CreatePostComponent />
      <PostSort>
        <Divider />
        <Sorter>
          <span>
            Sort by: <strong> Recent</strong>
          </span>
          <IoMdArrowDropdown />
        </Sorter>
      </PostSort>
      <PostComponent />
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: 100%;

  @media (max-width: 65.87em) {
    max-width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 27.75em) {
    max-width: 100%;
  }
`;

const PostSort = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
`;

const Sorter = styled.div`
  width: 14rem;
  span {
    font-size: 1.2rem;
    font-weight: 600;
    width: 100%;
    color: #999;
    strong {
      color: #333;
    }
  }

  svg {
    margin-left: 5px;
  }
`;

const Divider = styled.div`
  border-top: 1px solid #999;
  width: 100%;
  align-self: center;
`;

export default MainColumn;
