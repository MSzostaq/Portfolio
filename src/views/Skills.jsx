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
  margin: 12px 0;
`;

const SecondaryTitle = styled(Typed)`
  color: ${({ theme }) => theme.colors.white};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 12px 0;
`;

const Content = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 8px;
  width: 80%;

  @media (min-width: 800px) {
    width: 80%;
  }
`;

const IconAnimation = styled(motion.div)`
  background-color: transparent;
`;

const StyledHtmlIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.html};
  margin: 8px;
  width: 64px;
  height: 64px;
`;

const StyledCssIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.css};
  margin: 8px;
  width: 64px;
  height: 64px;
`;

const StyledJsIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.js};
  margin: 8px;
  width: 64px;
  height: 64px;
`;

const StyledReactIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.react};
  margin: 8px;
  width: 64px;
  height: 64px;
`;

const StyledReduxtIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.redux};
  margin: 8px;
  width: 64px;
  height: 64px;
`;

const StyledGitIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.git};
  margin: 8px;
  width: 64px;
  height: 64px;
`;

const StyledDatocmsIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.datoCMS};
  margin: 8px;
  width: 64px;
  height: 64px;
`;

const Skills = () => {
  return (
    <Wrapper id="about">
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
        <Title strings={["Technologies I already used"]} typeSpeed={40} />
        <Content>
          <IconAnimation whileHover={{ scale: 1.1 }}>
            <StyledHtmlIcon icon="html_64" />
          </IconAnimation>
          <IconAnimation whileHover={{ scale: 1.1 }}>
            <StyledCssIcon icon="css_64" />
          </IconAnimation>
          <IconAnimation whileHover={{ scale: 1.1 }}>
            <StyledJsIcon icon="js_64" />
          </IconAnimation>
          <IconAnimation whileHover={{ scale: 1.1 }}>
            <StyledReactIcon icon="react_64" />
          </IconAnimation>
          <IconAnimation whileHover={{ scale: 1.1 }}>
            <StyledReduxtIcon icon="redux_64" />
          </IconAnimation>
          <IconAnimation whileHover={{ scale: 1.1 }}>
            <StyledGitIcon icon="git_64" />
          </IconAnimation>
          <IconAnimation whileHover={{ scale: 1.1 }}>
            <StyledDatocmsIcon icon="datocms_64" />
          </IconAnimation>
        </Content>
        <SecondaryTitle
          strings={["Languages: english (B2 level), polish (native)"]}
          typeSpeed={40}
        />
        <SecondaryTitle strings={["Bachelor of Engineering"]} typeSpeed={40} />
      </ContentWrapper>
    </Wrapper>
  );
};

export default Skills;
