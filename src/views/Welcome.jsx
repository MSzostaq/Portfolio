import React from "react";
import styled from "styled-components";
import Typed from "react-typed";
import BackgroundParticles from "components/BackgroundParticles";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const WelcomeWrapper = styled.div`
  background-color: transparent;
  border-radius: 8px;
  padding: 32px;
  position: absolute;
  width: 80%;

  @media (min-width: 800px) {
    padding: 64px;
    width: 50%;
  }
`;

const Title = styled(Typed)`
  color: ${({ theme }) => theme.colors.white};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: bold;
`;

const SecondaryTitle = styled(Typed)`
  color: ${({ theme }) => theme.colors.white};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
  margin-top: 24px;
`;

const Welcome = () => {
  return (
    <Wrapper id="welcome">
      <BackgroundParticles />
      <WelcomeWrapper>
        <Title
          strings={["Hello there! I'm Maciek", "your future frontend dev"]}
          typeSpeed={40}
          fadeOut={true}
        />
      </WelcomeWrapper>
    </Wrapper>
  );
};

export default Welcome;
