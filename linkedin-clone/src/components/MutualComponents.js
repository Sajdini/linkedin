import styled, { keyframes } from "styled-components";

export const Section = styled.section`
  padding: 5rem 9rem 8rem;
  background-color: ${(props) => props.color};
  max-width: 100%;
`;

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
`;

export const Slide = keyframes`
  from {
    transform: translateX(-50rem);
  }

  to {
    transform: translateX(0);
  }
`;
