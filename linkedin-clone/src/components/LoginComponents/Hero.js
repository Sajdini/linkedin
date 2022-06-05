import React from "react";
import styled from "styled-components";
const Hero = () => {
  return (
    <Section>
      <HeroContainer>
        <h1>Welcome to your professional community</h1>
        <img src="/images/login-hero.svg" alt="" />
      </HeroContainer>
      <Form>
        <Google>
          <img src="/images/google.svg" alt="" />
          Sign in with Google
        </Google>
      </Form>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  align-content: start;
  padding-top: 60px;
  position: relative;
  flex-wrap: wrap;
  max-width: 85%;
  align-items: center;
  margin: auto;

  @media (min-width: 59.43em) {
    margin-bottom: 26rem;
  }

  @media (max-width: 23em) {
    padding: 1rem 2rem;
    text-align: center;
    gap: 4rem;
  }
`;
const HeroContainer = styled.div`
  width: 100%;
  justify-self: flex-start;

  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 5rem;
    color: #2977c9;
    font-weight: 200;
    line-height: 7rem;
  }

  img {
    z-index: 0;
    width: 60rem;
    height: 57rem;
    position: absolute;
    right: -8rem;
    top: 5rem;

    @media (max-width: 71.87em) {
      width: 49rem;
    }
  }

  @media (max-width: 59.4em) {
    text-align: center;
    h1 {
      width: 100%;
      line-height: 1;
      font-size: 3.5rem;
      margin-bottom: 2rem;
    }

    img {
      position: initial;
      width: 100%;
      height: 100%;
    }
  }
`;

const Form = styled.div`
  margin-top: 10rem;
  width: 40.8rem;

  @media (max-width: 59.4em) {
    margin: 2rem auto;
    max-width: 100%;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 5.5rem;
  width: 100%;
  border-radius: 28px;
  border: none;
  box-shadow: inset 0 0 0 1px #555;
  gap: 2.5rem;

  z-index: 0;
  transition-duration: 167ms;
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

export default Hero;
