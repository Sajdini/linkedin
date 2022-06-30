import React from "react";
import styled from "styled-components";
import { BsFillPeopleFill, BsCalendarDate } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { GrGroup } from "react-icons/gr";
import { RiPagesLine, RiHashtag } from "react-icons/ri";
import { BiNews } from "react-icons/bi";

const NetworkListItem = () => {
  return (
    <>
      <ListItems>
        <IconAndText>
          <Icon>
            <BsFillPeopleFill />
          </Icon>
          <Text>
            <span>Connections</span>
          </Text>
        </IconAndText>
        <span>88</span>
      </ListItems>
      <ListItems>
        <IconAndText>
          <Icon>
            <TiContacts />
          </Icon>
          <Text>
            <span>Contacts</span>
          </Text>
        </IconAndText>
        <span>88</span>
      </ListItems>
      <ListItems>
        <IconAndText>
          <Icon>
            <CgProfile />
          </Icon>
          <Text>
            <span>People i Follow</span>
          </Text>
        </IconAndText>
        <span>88</span>
      </ListItems>
      <ListItems>
        <IconAndText>
          <Icon>
            <GrGroup />
          </Icon>
          <Text>
            <span>Group</span>
          </Text>
        </IconAndText>
        <span>88</span>
      </ListItems>
      <ListItems>
        <IconAndText>
          <Icon>
            <BsCalendarDate />
          </Icon>
          <Text>
            <span>Events</span>
          </Text>
        </IconAndText>
        <span>88</span>
      </ListItems>
      <ListItems>
        <IconAndText>
          <Icon>
            <RiPagesLine />
          </Icon>
          <Text>
            <span>Pages</span>
          </Text>
        </IconAndText>
        <span>88</span>
      </ListItems>
      <ListItems>
        <IconAndText>
          <Icon>
            <BiNews />
          </Icon>
          <Text>
            <span>Newsletters</span>
          </Text>
        </IconAndText>
        <span>88</span>
      </ListItems>
      <ListItems>
        <IconAndText>
          <Icon>
            <RiHashtag />
          </Icon>
          <Text>
            <span>Hashtags</span>
          </Text>
        </IconAndText>
        <span>88</span>
      </ListItems>
    </>
  );
};
const ListItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  span {
    color: #999;
    font-size: 1.4rem;
  }
  svg {
    width: 2.3rem;
    height: 2.2rem;
    color: #666;
  }
`;

const IconAndText = styled.div`
  display: flex;

  align-items: center;
  width: 15rem;
  gap: 1.5rem;
`;
const Icon = styled.div``;
const Text = styled.div`
  text-align: start;
`;
export default NetworkListItem;
