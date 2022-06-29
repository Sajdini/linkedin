import React from "react";
import styled from "styled-components";
import LeftColumn from "../components/home-components/LeftColumn";
import MainColumn from "../components/home-components/main-column/MainColumn";
import RightColumn from "../components/home-components/right-column/RightComponent";
const Home = () => {
  return (
    <Container>
      <Layout>
        <LeftColumn />
        <MainColumn />
        <RightColumn />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem 10rem;
  max-width: 100%;
  @media (max-width: 65.87em) {
    width: 100%;

    padding: 0;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(25rem, 7fr);
  column-gap: 2.5rem;
  row-gap: 2.5rem;
  grid-template-rows: auto;
  margin: 2.5rem 0;
  @media (max-width: 65.87em) {
    display: block;
    margin: 5px 0;
    padding: 0 5px;
  }
`;

export default Home;
