import React from "react";
import styled from "styled-components";
import ColumnHeader from "./ColumnHeader";
import NetworkGrid from "./NetworkGrid";
const MainColumn = () => {
  return (
    <Container>
      <ColumnHeader h3Text="No pending invitations" aText="Manage" />
      <NetworkGrid />
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 43.75em) {
    margin-bottom: 5rem;
  }
`;

export default MainColumn;
