import React from "react";
import styled from "styled-components";
import { BsFillInfoSquareFill } from "react-icons/bs";
import UserBadge from "./UserBadge";
const RightColumn = () => {
  return (
    <Container>
      <ColumnTitle>
        <h1>Add to your feed</h1>
        <BsFillInfoSquareFill />
      </ColumnTitle>
      <UserBadge button />
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightside;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  max-width: 100%;
  padding: 2rem 1rem;
  gap: 1.5rem;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  @media (max-width: 65.87em) {
    display: none;
  }
`;

const ColumnTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 1.65rem;
    color: #666;
  }
  svg {
    width: 1.3rem;
    height: 1.3rem;
    fill: #666;
  }
`;

export default RightColumn;
