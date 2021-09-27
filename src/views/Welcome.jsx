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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-wrap: break-word;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled(Typed)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

const SecondaryTitle = styled(Typed)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const Welcome = () => {
  return (
    <Wrapper id="welcome">
      <BackgroundParticles />
      <WelcomeWrapper>
        <Title strings={[`Hello there! I'm Maciek`]} typeSpeed={40} />
        <br />
        <SecondaryTitle
          strings={[`// your future frontend dev`]}
          startDelay={4000}
          showCursor={false}
          typeSpeed={40}
        />
      </WelcomeWrapper>
    </Wrapper>
  );
};

export default Welcome;
