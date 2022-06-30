import React from "react";
import styled from "styled-components";
import NetworkListItem from "./NetworkListItem";
const SideColumn = () => {
  return (
    <Container>
      <h3>Manage my network</h3>
      <PersonalNetworkContainer>
        <NetworkListItem />
      </PersonalNetworkContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  background-color: #fff;
  width: 100%;
  max-width: 25rem;

  h3 {
    padding: 5px;
    font-size: 1.6rem;
    color: #333;
    font-weight: 100;
  }

  @media (max-width: 28.75em) {
    max-width: 95%;
  }
`;

const PersonalNetworkContainer = styled.ul`
  padding: 0 0.5rem;
  list-style: none;
`;

export default SideColumn;
