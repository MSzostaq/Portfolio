import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Particles from "react-particles-js";
import Typed from "react-typed";
import Icon from "components/Icon";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const StyledParticles = styled(Particles)`
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  position: absolute;
`;

const Title = styled(Typed)`
  color: ${({ theme }) => theme.colors.white};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const Content = styled.ul`
  display: flex;
  margin: 8px;
`;

const IconAnimation = styled(motion.div)`
  background-color: transparent;
`;

const StyledGithubIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.lightGrey};
  margin: 8px;
  width: 64px;
  height: 64px;
`;

const StyledLinkedInIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.linkedIn};
  margin: 8px;
  width: 64px;
  height: 64px;
`;

const Contact = () => {
  return (
    <Wrapper id="contact">
      <StyledParticles
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 400,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 2,
                color: "#f9ab00",
              },
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
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
      <ContentWrapper>
        <Title strings={["Contact me. Enjoy!"]} typeSpeed={40} />
        <Content>
          <IconAnimation whileHover={{ scale: 1.1 }}>
            <StyledGithubIcon icon="at" />
          </IconAnimation>
          <IconAnimation whileHover={{ scale: 1.1 }}>
            <StyledGithubIcon icon="github_64" />
          </IconAnimation>
          <IconAnimation whileHover={{ scale: 1.1 }}>
            <StyledLinkedInIcon icon="linkedin_64" />
          </IconAnimation>
        </Content>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Contact;
