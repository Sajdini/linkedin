import React from "react";
import styled from "styled-components";
import Features from "./Features";
const CTA = () => {
  return (
    <>
      <CTAsection>
        <Features />

        <CtaContainer>
          <h1>Join your colleagues, classmates, and friends on LinkedIn.</h1>
          <CTABtn>
            <a href="#">Get Started</a>
          </CTABtn>
        </CtaContainer>
      </CTAsection>
    </>
  );
};

export default CTA;

const CTAsection = styled.div`
  background-color: #fff;
`;

const CtaContainer = styled.div`
  background: url(/images/people.png) no-repeat;
  background-size: 100% 80%;
  background-position: bottom;
  width: 100%;
  height: 90vh;
  margin-top: 15rem;
  margin-bottom: 2rem;

  h1 {
    margin: 0 auto;
    font-size: 4.5rem;
    font-weight: 100;
    width: 100%;
    max-width: 110rem;
    letter-spacing: 1px;
    line-height: 1.25;
  }
  @media (max-width: 40.62em) {
    background: none;
    max-width: 100%;
    text-align: center;
    padding-bottom: 5rem;
    height: auto;

    h1 {
      font-size: 4rem;
    }
  }
`;

const CTABtn = styled.div`
  margin: 6rem;

  a {
    background-color: #2977c9;
    padding: 1.5rem 2.5rem;
    font-size: 2rem;
    letter-spacing: 1px;
    font-weight: 700;
    color: #fff;
    border-radius: 50px;
    transition: all 0.3s;
    cursor: pointer;
    text-decoration: none;

    :hover {
      background-color: #205b99;
    }
  }
`;
