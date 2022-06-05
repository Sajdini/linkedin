import React, { useState } from "react";
import { SliderData } from "./data";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import styled from "styled-components";
import { Slide } from "../MutualComponents";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <SliderContainer>
      <SLiderButtons>
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      </SLiderButtons>
      {SliderData.map((slide, index) => {
        return (
          <ImageTextContainer
            activeSlide={index === current ? "flex" : "none"}
            key={index}
          >
            <ButtonLeft className="left-arrow" onClick={prevSlide} />
            <ButtonRight className="right-arrow" onClick={nextSlide} />
            <Text>
              <Header>{slide.title}</Header>
              <span>{slide.text}</span>
            </Text>
            {index === current && (
              <Image>
                <img src={slide.image} alt="travel image" />
              </Image>
            )}
          </ImageTextContainer>
        );
      })}
    </SliderContainer>
  );
};

export default Slider;

const SliderContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;

  @media (max-width: 62.43em) {
    padding: 1rem;
  }
`;

const SLiderButtons = styled.div`
  display: flex;
  gap: 2rem;
  position: absolute;
  top: 1rem;
  right: 0rem;

  @media (max-width: 62.43em) {
    display: none;
  }
`;

const ButtonLeft = styled(FaArrowAltCircleLeft)`
  display: none;
  position: absolute;
  top: 45%;
  left: -6rem;
  width: 5rem;
  height: 5rem;
  @media (max-width: 62.43em) {
    display: block;
  }
`;

const ButtonRight = styled(FaArrowAltCircleRight)`
  display: none;
  position: absolute;
  top: 45%;
  right: -6rem;
  width: 5rem;
  height: 5rem;
  @media (max-width: 62.43em) {
    display: block;
  }
`;

const ImageTextContainer = styled.div`
  display: ${(props) => props.activeSlide};
  justify-content: flex-start;
  gap: 12rem;
  flex-wrap: wrap;

  @media (max-width: 62.43em) {
    align-items: center;
    gap: 4rem;
    div {
      text-align: center;
      max-width: 100%;
    }
  }
`;

const Text = styled.div`
  max-width: 35%;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    font-size: 3rem;
    color: #555;
    font-weight: 100;
  }

  @media (max-width: 62.43em) {
    h2 {
      font-size: 3.5rem;
    }

    span {
      font-size: 2.5rem;
    }
  }
`;

const Image = styled.div`
  max-width: 40rem;
  flex-shrink: 0;
  margin: 0 auto;
  img {
    width: 40rem;
    height: 40rem;
  }

  @media (max-width: 25em) {
  }
  img {
    max-width: 30rem;
    max-height: 30rem;
  }
`;

const Header = styled.h2`
  margin-top: 0.5rem;
  font-size: 4rem;
  font-weight: 50;

  line-height: 1.1;
  color: #935532;
`;
