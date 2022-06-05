import React, { useState } from "react";
import { Section, Container } from "../MutualComponents";
import styled from "styled-components";
import { RiArrowDropDownFill } from "react-icons/ri";
const Features = () => {
  const [visibility, setVisibility] = useState(false);

  const dropDownClick = () => {
    setVisibility((prevstate) => !prevstate);
  };

  return (
    <FeaturesSection color="#FFF">
      <FeaturesContainer>
        <Feature>
          <Image>
            <img src="/images/people-on-sofa.svg" />
          </Image>
          <Text>
            <h1>Connect with people who can help</h1>
            <a>Find people you know</a>
          </Text>
        </Feature>
        <Feature>
          <Image>
            <img src="/images/woman-on-desk.svg" />
          </Image>
          <Text>
            <h1>Learn the skills you need to succeed</h1>
            <DropDown>
              <a onClick={dropDownClick}>
                Choose a topic to learn about
                <span>{<RiArrowDropDownFill />}</span>
              </a>
              <List visible={visibility}>
                <ul>
                  <li>
                    <h3>Web Development</h3>
                    <p>1,200 + courses</p>
                  </li>
                  <li>
                    <h3>Web Development</h3>
                    <p>1,200 + courses</p>
                  </li>
                  <li>
                    <h3>Web Development</h3>
                    <p>1,200 + courses</p>
                  </li>
                  <li>
                    <h3>Web Development</h3>
                    <p>1,200 + courses</p>
                  </li>
                </ul>
              </List>
            </DropDown>
          </Text>
        </Feature>
      </FeaturesContainer>
    </FeaturesSection>
  );
};

export default Features;

const FeaturesSection = styled(Section)`
  padding-top: 15rem;

  @media (max-width: 62.43em) {
    padding: 10rem 2rem;
  }
`;

const FeaturesContainer = styled(Container)`
  justify-content: flex-start;
  max-width: 93rem;

  @media (max-width: 56.75em) {
    flex-direction: column;
    gap: 50px;
    align-items: center;
    div {
      margin: 0;
    }
  }
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 62.43em) {
    align-self: center;
  }
`;

const Image = styled.div`
  max-width: 25rem;
  align-self: start;
  justify-self: flex-start;

  img {
    width: 100%;
  }
`;

const Text = styled.div`
  margin-right: 5rem;
  h1 {
    font-size: 4rem;
    font-weight: 100;
    letter-spacing: 1px;
    margin-bottom: 4rem;
  }
  a {
    padding: 2rem 4rem;
    color: #555;
    box-shadow: inset 0 0 0 1px #555;
    border-radius: 50px;
    font-size: 2rem;
    transition: all 0.3s;
    position: relative;
    &:hover {
      background-color: #ddd;
    }
  }

  @media (max-width: 62.43em) {
    h1 {
      font-size: 3rem;
    }
    a {
      font-size: 1.5rem;
    }
  }
`;

const DropDown = styled.div`
  max-width: fit-content;
  position: relative;

  //Here, some styling is added or overwritten in the a element from the Text div.
  a {
    border-radius: 8px;
    box-shadow: inset 0 0 0 0.5px #555;
    padding-left: 2rem;
    padding-right: 5rem;
    width: 100%;
  }

  span {
    position: absolute;
    right: 1rem;
    width: 3rem;
    svg {
      width: 100%;
    }
  }
`;

const List = styled.div`
  position: absolute;
  z-index: 20;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: inset 0 0 0 0.5px #555;
  overflow: scroll;
  width: 100%;
  text-transform: capitalize;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.4px;
  display: ${(props) => (props.visible === true ? "block" : "none")};
  ul {
    list-style: none;
    padding: 1rem;
    height: 30rem;
  }

  li + li {
    margin-top: 15px;
  }

  li {
    transition: all 0.3s;
    &:hover {
      background-color: #ddd;
    }
  }

  p {
    color: #888;
    font-weight: 200;
  }
`;
