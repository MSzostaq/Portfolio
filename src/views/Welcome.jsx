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
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.4,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable_auto: true,
              distance: 100,
              color: "#fff",
              opacity: 1,
              width: 1,
              condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600,
              },
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
              },
              onclick: {
                enable: false,
              },
              resize: true,
            },
          },
          retina_detect: true,
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
