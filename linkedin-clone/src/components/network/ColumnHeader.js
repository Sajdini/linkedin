import React from "react";
import styled from "styled-components";
const ColumnHeader = (props) => {
  return (
    <Container>
      <h3>{props.h3Text}</h3>
      <a href="#">{props.aText}</a>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 1rem;
  align-items: center;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  h3 {
    padding: 5px;
    font-size: 1.6rem;
    color: #666;
    font-weight: 600;
  }

  a {
    font-size: 1.6rem;
    color: #666;
    font-weight: 600;
    padding: 1rem;
    border-radius: 8px;
    cursor: pointer;
    color: #333;
    transition: all 300ms;
    text-decoration: none;
    :hover {
      background-color: #ddd;
    }
  }
`;

export default ColumnHeader;
