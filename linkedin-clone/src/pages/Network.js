import React from "react";

import styled from "styled-components";
import SideColumn from "../components/network/SideColumn";
import MainColumn from "../components/network/MainColumn";
const Network = () => {
  return (
    <Container>
      <Layout>
        <SideColumn />
        <MainColumn />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem 5rem;
  max-width: 100%;
  @media (max-width: 50.5em) {
    padding: 1rem;
  }
`;

const Layout = styled.div`
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  @media (max-width: 28.75em) {
    flex-direction: column;
    align-items: center;
  }
`;

export default Network;
