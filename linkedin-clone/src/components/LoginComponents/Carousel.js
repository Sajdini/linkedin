import React from "react";
import { Section, Container } from "../MutualComponents";
import Slider from "./Slider";
import { SliderData } from "./data";
import styled from "styled-components";
const Carousel = () => {
  return (
    <CarouselSection>
      <Slider slides={SliderData} />
    </CarouselSection>
  );
};

const CarouselSection = styled(Section)`
  padding: 10rem;

  @media (max-width: 62.43em) {
    padding: 1rem 7rem;
  }
`;

export default Carousel;
