import React from "react";
import { Section, Container } from "../MutualComponents";
import styled from "styled-components";
import { loginLinks } from "./data";
const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <Logo>
          <img src="/images/login-logo.svg" alt="login logo" />
        </Logo>
        <LinksContainer>
          {loginLinks.map((data) => {
            return (
              <LinksColumn>
                <p>{data.name}</p>
                <Links>
                  {data.links.map((link) => {
                    return <a href="#">{link}</a>;
                  })}
                </Links>
              </LinksColumn>
            );
          })}
        </LinksContainer>
      </FooterContainer>
    </FooterSection>
  );
};

const FooterSection = styled(Section)`
  padding-top: 1rem;
`;

const FooterContainer = styled(Container)`
  gap: 15rem;
  flex-wrap: wrap;

  @media (max-width: 70.68em) {
    gap: 2rem;
  }
`;

const Logo = styled.div`
  width: 10rem;
  height: 10rem;
  flex-shrink: 0;
  img {
    max-width: 100%;
  }

  @media (max-width: 70.68em) {
    height: 4rem;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 10rem;
  flex-wrap: wrap;

  @media (max-width: 70.68em) {
    gap: 4rem;
  }
`;

const LinksColumn = styled.div`
  p {
    font-size: 1.5rem;
    font-weight: 600;
  }

  a {
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: 500;
    color: #888;

    :hover {
      color: #205b99;
      text-decoration: underline;
    }
  }
`;

const Links = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
  }
`;

export default Footer;
