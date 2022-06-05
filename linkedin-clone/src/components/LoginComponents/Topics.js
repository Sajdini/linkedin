import React from "react";
import styled from "styled-components";
import { Section, Container } from "../MutualComponents";
const Topics = () => {
  return (
    <TopicSection color="#eaede8">
      <TopicContainer>
        <Header>Explore topics you are interested in</Header>
        <Content>
          <p>content topics </p>
          <div>
            <a href="#">see all topics</a>
            <a href="#">remote</a>
            <a href="#">work from home</a>
            <a href="#">retirement</a>
            <a href="#">internships</a>
            <a href="#">freelancer</a>
            <a href="#">salary and compensation</a>
            <a href="#">starting a job</a>
          </div>
        </Content>
      </TopicContainer>
    </TopicSection>
  );
};

const Header = styled.h2`
  margin-top: 0.5rem;
  font-size: 4.8rem;
  font-weight: 50;
  max-width: 35%;
  line-height: 1.5;
`;

const TopicSection = styled(Section)`
  @media (max-width: 25.62em) {
    padding: 5rem 2rem;
  }
`;

const TopicContainer = styled(Container)`
  @media (max-width: 64.62em) {
    flex-direction: column;

    h2 {
      max-width: 100%;
      font-size: 3rem;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  text-transform: uppercase;
  flex-grow: 2;

  p {
    font-size: 1.4rem;
    letter-spacing: 1px;
    color: #888;
  }

  div {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    max-width: 55rem;
  }
  a {
    color: #555;
    box-shadow: inset 0 0 0 1px #555;
    font-size: 1.4rem;
    padding: 1.8rem 1.8rem;
    border-radius: 100px;
    margin-top: 0.5rem;
    font-weight: 700;
    transition: all 300ms;
    text-decoration: none;
    :hover {
      background-color: #ddd;
    }
    :first-child {
      color: #0a66c2;
      box-shadow: inset 0 0 0 1px #0a66c2;

      :hover {
        background-color: rgba(112, 181, 249, 0.15);
      }
    }
  }

  @media (max-width: 64.62em) {
    width: 100%;

    div {
      max-width: 100%;
    }
  }
`;

export default Topics;
