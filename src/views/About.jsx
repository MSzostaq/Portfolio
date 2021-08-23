import React from "react";
import styled from "styled-components";
import Icon from "components/Icon";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.selectedGreen};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const Content = styled.ul`
  margin: 8px;
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

const StyledDatocmsIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.datoCMS};
  margin: 8px;
  width: 64px;
  height: 64px;
`;

const About = () => {
  return (
    <Wrapper id="about">
      <Title>Known technologies</Title>
      <Content>
        <StyledHtmlIcon icon="html_64" />
        <StyledCssIcon icon="css_64" />
        <StyledJsIcon icon="js_64" />
        <StyledReactIcon icon="react_64" />
        <StyledReduxtIcon icon="redux_64" />
        <StyledDatocmsIcon icon="datocms_64" />
      </Content>
    </Wrapper>
  );
};

export default About;
