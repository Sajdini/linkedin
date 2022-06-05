import React from "react";
import styled from "styled-components";
import Hero from "../components/LoginComponents/Hero";
import Topics from "../components/LoginComponents/Topics";
import NavBar from "../components/NavBar";
import Post from "../components/LoginComponents/Post";
import Carousel from "../components/LoginComponents/Carousel";
import CTA from "../components/LoginComponents/CTA";
import Footer from "../components/LoginComponents/Footer";
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
