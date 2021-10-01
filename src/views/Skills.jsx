import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import BackgroundParticles from "components/BackgroundParticles";
import pl from "constants/pl.png";
import uk from "constants/uk.png";
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

const ContentWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  margin: 12px 4px;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

const Content = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 8px;
  width: 100%;

  @media (min-width: 800px) {
    flex-wrap: nowrap;
    width: 80%;
  }
`;

const IconAnimation = styled(motion.div)`
  background-color: transparent;
`;

const StyledHtmlIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.html};
  margin: 4px;
  width: 48px;
  height: 48px;

  @media (min-width: 800px) {
    margin: 8px;
    width: 64px;
    height: 64px;
  }
`;

const StyledCssIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.css};
  margin: 4px;
  width: 48px;
  height: 48px;

  @media (min-width: 800px) {
    margin: 8px;
    width: 64px;
    height: 64px;
  }
`;

const StyledJsIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.js};
  margin: 4px;
  width: 48px;
  height: 48px;

  @media (min-width: 800px) {
    margin: 8px;
    width: 64px;
    height: 64px;
  }
`;

const StyledReactIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.react};
  margin: 4px;
  width: 48px;
  height: 48px;

  @media (min-width: 800px) {
    margin: 8px;
    width: 64px;
    height: 64px;
  }
`;

const StyledReduxtIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.redux};
  margin: 4px;
  width: 48px;
  height: 48px;

  @media (min-width: 800px) {
    margin: 8px;
    width: 64px;
    height: 64px;
  }
`;

const StyledGitIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.git};
  margin: 4px;
  width: 48px;
  height: 48px;

  @media (min-width: 800px) {
    margin: 8px;
    width: 64px;
    height: 64px;
  }
`;

const StyledDatocmsIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.datoCMS};
  margin: 4px;
  width: 48px;
  height: 48px;

  @media (min-width: 800px) {
    margin: 8px;
    width: 64px;
    height: 64px;
  }
`;

const SecondaryTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 12px 4px;
  text-align: center;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const StyledImage = styled.img`
  margin: 0 8px;
  width: 42px;
  height: 42px;
`;

const Skills = () => {
  return (
    <Wrapper id="about">
      <BackgroundParticles />
      <ContentWrapper>
        <Title>Technologies I already used:</Title>
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
        <SecondaryTitle>
          Languages: <StyledImage src={uk} /> (B2 level),
          <StyledImage src={pl} /> (native)
        </SecondaryTitle>
        <SecondaryTitle>Bachelor of Engineering</SecondaryTitle>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Skills;
