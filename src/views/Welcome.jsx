import React from "react";
import styled from "styled-components";
import Particles from "react-particles-js";
import Typed from "react-typed";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const WelcomeWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
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
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "square",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <WelcomeWrapper>
        <Title
          strings={["Hello there! I'm Maciek", "your future frontend dev"]}
          typeSpeed={40}
          smartBackspace={true}
          fadeOut={true}
        />
      </WelcomeWrapper>
    </Wrapper>
  );
};

export default Welcome;
