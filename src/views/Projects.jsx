import React from "react";
import styled from "styled-components";
import Icon from "components/Icon";
import ProjectCard from "components/ProjectCard";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media (min-width: 800px) {
    justify-content: center;
  }
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const ProjectTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
  margin: 8px;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const ProjectContent = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.2;
  margin: 16px 8px;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const IconWrapper = styled.div``;

const StyledHtmlIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.html};
  margin: 8px;
  width: 48px;
  height: 48px;
`;

const StyledCssIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.css};
  margin: 8px;
  width: 48px;
  height: 48px;
`;

const StyledJsIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.js};
  margin: 8px;
  width: 48px;
  height: 48px;
`;

const StyledReactIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.react};
  margin: 8px;
  width: 48px;
  height: 48px;
`;

const StyledReduxIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.redux};
  margin: 8px;
  width: 48px;
  height: 48px;
`;

const StyledDatocmsIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.datoCMS};
  margin: 8px;
  width: 48px;
  height: 48px;
`;

const ButtonWrapper = styled.div``;

const Contact = () => {
  return (
    <Wrapper id="projects">
      <Title>Check out my projects</Title>
      <ProjectWrapper>
        <ProjectCard>
          <ProjectTitle>Cryptorate</ProjectTitle>
          <ProjectContent>
            My first React application. Cryptorate comnnects with external API -
            DatoCMS. Cryptorate has pagination, shows the data and is fully
            responsive.
          </ProjectContent>
          <IconWrapper>
            <StyledHtmlIcon icon="html_24" />
            <StyledCssIcon icon="css_24" />
            <StyledJsIcon icon="js_24" />
            <StyledReactIcon icon="react_24" />
            <StyledDatocmsIcon icon="datocms_24" />
          </IconWrapper>
          <ButtonWrapper></ButtonWrapper>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>TODO-List</ProjectTitle>
          <ProjectContent>
            Clone of Google Keep, simple TODO List made with React, React-Redux
            and Redux-Saga.
          </ProjectContent>
          <IconWrapper>
            <StyledHtmlIcon icon="html_24" />
            <StyledCssIcon icon="css_24" />
            <StyledJsIcon icon="js_24" />
            <StyledReactIcon icon="react_24" />
            <StyledReduxIcon icon="redux_24" />
          </IconWrapper>
          <ButtonWrapper></ButtonWrapper>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>tic-tac-toe</ProjectTitle>
          <ProjectContent>
            Tic-tac-toe game with two game modes single player (vs Ai) and
            multiplayer vs other player (socket.io).
          </ProjectContent>
          <IconWrapper>
            <StyledHtmlIcon icon="html_24" />
            <StyledCssIcon icon="css_24" />
            <StyledJsIcon icon="js_24" />
            <StyledReactIcon icon="react_24" />
          </IconWrapper>
          <ButtonWrapper></ButtonWrapper>
        </ProjectCard>
      </ProjectWrapper>
    </Wrapper>
  );
};

export default Contact;
