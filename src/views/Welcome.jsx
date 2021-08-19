import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.error};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const Welcome = () => {
  return (
    <Wrapper id="welcome">
      <Title>Hello! My name is Maciej - future frontend dev!</Title>
    </Wrapper>
  );
};

export default Welcome;
