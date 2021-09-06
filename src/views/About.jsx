import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Icon from "components/Icon";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin: 12px 0;
`;

const SecondaryTitle = styled.p`
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

const About = () => {
  return (
    <Wrapper id="about">
      <Title>Known technologies:</Title>
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
        Languages: english (B2 level), polish: (native)
      </SecondaryTitle>
      <SecondaryTitle>Bachelor of Engineering</SecondaryTitle>
    </Wrapper>
  );
};

export default About;
