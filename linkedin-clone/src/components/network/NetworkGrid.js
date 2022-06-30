import React from "react";
import styled from "styled-components";
import ColumnHeader from "./ColumnHeader";
import GridItem from "./GridItem";
const NetworkGrid = () => {
  return (
    <Container>
      <ColumnHeader h3Text="Based on who you follow" aText="See all" />
      <Grid>
        <GridItem />
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(21.5rem, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  @media (max-width: 64.38em) {
    grid-template-columns: repeat(2, minmax(21.5rem, 1fr));
  }
 
  @media (max-width: 39.69em) {
    grid-template-columns: minmax(0, 50rem);
  }
`;

export default NetworkGrid;
