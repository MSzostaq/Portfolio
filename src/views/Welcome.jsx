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

const TitleWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.icons};
  border-radius: 8px;
  padding: 64px;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: bold;
`;

const SecondaryTitleWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.icons};
  border-radius: 8px;
  padding: 32px;
`;

const SecondaryTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
`;

const Welcome = () => {
  return (
    <Wrapper id="welcome">
      <TitleWrapper>
        <Title>Hello! My name is Maciej!</Title>
      </TitleWrapper>
      <SecondaryTitleWrapper>
        <SecondaryTitle>future frontend dev</SecondaryTitle>
      </SecondaryTitleWrapper>
    </Wrapper>
  );
};

export default Welcome;
