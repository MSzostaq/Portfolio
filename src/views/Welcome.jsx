import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-gap: 4px;
  height: 100vh;
`;

const WelcomeWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 8px;
  padding: 64px;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: bold;
`;

const SecondaryTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
  margin-top: 24px;
`;

const Welcome = () => {
  return (
    <Wrapper id="welcome">
      <WelcomeWrapper>
        <Title>Hello! My name is Maciej!</Title>
        <SecondaryTitle>future frontend dev</SecondaryTitle>
      </WelcomeWrapper>
    </Wrapper>
  );
};

export default Welcome;
