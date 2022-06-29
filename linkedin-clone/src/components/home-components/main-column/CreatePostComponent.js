import React from "react";
import styled from "styled-components";
import profile from "../../../profile.JPEG";
import PostAttachmentComponent from "./PostAttachmentComponent";

const CreatePostComponent = () => {
  return (
    <Container>
      <ImageAndInput>
        <ProfilePicture>
          <img src={profile} alt="profile portrait" />
        </ProfilePicture>
        <button>Start a post</button>
      </ImageAndInput>
      <PostAttachmentComponent />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  max-width: 100%;
  padding: 2rem 1rem;
  gap: 2.5rem;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;
const ImageAndInput = styled.div`
  display: flex;

  gap: 1rem;
  button {
    width: 100%;
    border-radius: 100px;
    border: 1px solid #bbb;
    background-color: #fff;
    color: #999;
    text-align: start;
    padding-left: 2rem;
    font-weight: 600;
    transition: all 300ms;
    :hover {
      background-color: #ddd;
    }
  }
`;
const ProfilePicture = styled.div`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  img {
    max-width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export default CreatePostComponent;
