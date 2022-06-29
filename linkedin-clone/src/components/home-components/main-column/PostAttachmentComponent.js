import React from "react";
import styled from "styled-components";
import { HiOutlinePhotograph } from "react-icons/hi";
import {
  BsFillPlayBtnFill,
  BsCalendar3,
  BsLayoutTextWindowReverse,
} from "react-icons/bs";
const PostAttachmentComponent = () => {
  return (
    <PostAttachments>
      <AttachmentHolder>
        <IconHolder>
          <HiOutlinePhotograph color="#0d72a6" />
        </IconHolder>
        <span>Photo</span>
      </AttachmentHolder>
      <AttachmentHolder>
        <IconHolder>
          <BsFillPlayBtnFill color="#6dae53" />
        </IconHolder>
        <span>Video</span>
      </AttachmentHolder>
      <AttachmentHolder>
        <IconHolder>
          <BsCalendar3 color="#b37353" />
        </IconHolder>
        <span>Event</span>
      </AttachmentHolder>
      <AttachmentHolder>
        <IconHolder>
          <BsLayoutTextWindowReverse color="#de7845" />
        </IconHolder>
        <span>Write Article</span>
      </AttachmentHolder>
    </PostAttachments>
  );
};

const PostAttachments = styled.div`
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 22em) {
    padding: 0;
  }
`;

const AttachmentHolder = styled.div`
  display: flex;

  align-items: center;
  gap: 0.5rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: #999;
  padding: 5px 1rem;
  transition: all 300ms;
  border-radius: 8px;
  @media (max-width: 22em) {
    flex-direction: column;
  }
  :hover {
    background-color: #ddd;
  }
`;

const IconHolder = styled.div`
  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: ${(props) => props.color};
  }
`;

export default PostAttachmentComponent;
