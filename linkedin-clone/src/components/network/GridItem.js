import React from "react";
import styled from "styled-components";
import background from "../../background_img.png";
import profile from "../../profile.JPEG";
const GridItem = () => {
  return (
    <>
      <Container>
        <Image>
          <img src={profile} alt="badge icon" />
        </Image>
        <ImageHolder>
          <img src={background} alt="Background" />
        </ImageHolder>

        <InfoHolder>
          <PersonInfo>
            <h3>Samir Ajdini</h3>
            <p>Junior web developer/Reactjs programmer</p>
          </PersonInfo>

          <BtnHolder>
            <p>Talks about #frontend, #tech, #reactjs, #javascript, #css</p>
            <a>Follow</a>
          </BtnHolder>
        </InfoHolder>
      </Container>
      <Container>
        <Image>
          <img src={profile} alt="badge icon" />
        </Image>
        <ImageHolder>
          <img src={background} alt="Background" />
        </ImageHolder>

        <InfoHolder>
          <PersonInfo>
            <h3>Samir Ajdini</h3>
            <p>Junior web developer/Reactjs programmer</p>
          </PersonInfo>

          <BtnHolder>
            <p>Talks about #frontend, #tech, #reactjs, #javascript, #css</p>
            <a>Follow</a>
          </BtnHolder>
        </InfoHolder>
      </Container>
      <Container>
        <Image>
          <img src={profile} alt="badge icon" />
        </Image>
        <ImageHolder>
          <img src={background} alt="Background" />
        </ImageHolder>

        <InfoHolder>
          <PersonInfo>
            <h3>Samir Ajdini</h3>
            <p>Junior web developer/Reactjs programmer</p>
          </PersonInfo>

          <BtnHolder>
            <p>Talks about #frontend, #tech, #reactjs, #javascript, #css</p>
            <a>Follow</a>
          </BtnHolder>
        </InfoHolder>
      </Container>
      <Container>
        <Image>
          <img src={profile} alt="badge icon" />
        </Image>
        <ImageHolder>
          <img src={background} alt="Background" />
        </ImageHolder>

        <InfoHolder>
          <PersonInfo>
            <h3>Samir Ajdini</h3>
            <p>Junior web developer/Reactjs programmer</p>
          </PersonInfo>

          <BtnHolder>
            <p>Talks about #frontend, #tech, #reactjs, #javascript, #css</p>
            <a>Follow</a>
          </BtnHolder>
        </InfoHolder>
      </Container>
      <Container>
        <Image>
          <img src={profile} alt="badge icon" />
        </Image>
        <ImageHolder>
          <img src={background} alt="Background" />
        </ImageHolder>

        <InfoHolder>
          <PersonInfo>
            <h3>Samir Ajdini</h3>
            <p>Junior web developer/Reactjs programmer</p>
          </PersonInfo>

          <BtnHolder>
            <p>Talks about #frontend, #tech, #reactjs, #javascript, #css</p>
            <a>Follow</a>
          </BtnHolder>
        </InfoHolder>
      </Container>
      <Container>
        <Image>
          <img src={profile} alt="badge icon" />
        </Image>
        <ImageHolder>
          <img src={background} alt="Background" />
        </ImageHolder>

        <InfoHolder>
          <PersonInfo>
            <h3>Samir Ajdini</h3>
            <p>Junior web developer/Reactjs programmer</p>
          </PersonInfo>

          <BtnHolder>
            <p>Talks about #frontend, #tech, #reactjs, #javascript, #css</p>
            <a>Follow</a>
          </BtnHolder>
        </InfoHolder>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  gap: 2.7rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  transition: all 300ms;
  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  max-width: 100%;
`;

const ImageHolder = styled.div`
  max-width: 100%;
  height: 6.8rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const InfoHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;

const PersonInfo = styled.div`
  h3 {
    font-size: 1.6rem;
    color: #555;
    font-weight: 600;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }
  p {
    max-width: 70%;
    font-size: 1.3rem;
    color: #999;
    cursor: pointer;
  }
`;

const BtnHolder = styled.div`
  p {
    font-size: 1.19rem;
    color: #999;
    cursor: pointer;
  }

  a {
    text-align: center;
    width: 100%;
    border-radius: 50px;
    border: 1px solid #0a66c2;
    display: block;
    padding: 0.6rem 0;
    margin: 1rem 0;
    font-size: 1.45rem;
    color: #0a66c2;
    font-weight: 600;
    transition: all 300ms;
    cursor: pointer;
    :hover {
      background-color: #e7f0f9;
      box-shadow: inset 0 0 2px #0a66c2;
    }
  }
`;

const Image = styled.div`
  width: 7rem;
  height: 7rem;
  position: absolute;
  z-index: 10;
  border: solid 2px #fff;
  border-radius: 50%;
  overflow: hidden;
  top: 2.5rem;
  left: 0.9rem;
  cursor: pointer;
  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default GridItem;
