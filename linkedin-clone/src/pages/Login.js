import React from "react";
import styled from "styled-components";
import {
  Hero,
  Topics,
  Post,
  Carousel,
  CTA,
  Footer,
} from "../components/LoginComponents";

const Login = () => {
  return (
    <Container>
      <Hero />
      <Topics />
      <Post />
      <Carousel />
      <CTA />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  padding: 0;
`;

export default Login;
