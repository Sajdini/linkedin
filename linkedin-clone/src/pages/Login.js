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
import NavBar from "../components/NavBar";

const Login = () => {
  return (
    <Container>
      <NavBar />
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
