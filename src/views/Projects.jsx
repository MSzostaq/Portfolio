import React from "react";
import styled from "styled-components";
import BackgroundParticles from "components/BackgroundParticles";
import Button from "components/Button";
import Icon from "components/Icon";
import ProjectCard from "components/ProjectCard";

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
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
  margin-bottom: 16px;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const ProjectTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  margin: 4px;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: 8px;
  }
`;

const ProjectContent = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 1.2;
  margin: 4px;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 8px;
  }
`;

const IconWrapper = styled.div`
  @media (min-width: 800px) {
    margin: 4px;
  }
`;

const StyledHtmlIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.html};
  margin: 6px;
  width: 48px;
  height: 48px;
`;

const StyledCssIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.css};
  margin: 6px;
  width: 48px;
  height: 48px;
`;

const StyledJsIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.js};
  margin: 6px;
  width: 48px;
  height: 48px;
`;

const StyledReactIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.react};
  margin: 6px;
  width: 48px;
  height: 48px;
`;

const StyledReduxIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.redux};
  margin: 6px;
  width: 48px;
  height: 48px;
`;

const StyledDatocmsIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.datoCMS};
  margin: 6px;
  width: 48px;
  height: 48px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin: 4px;
`;

const StyledButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  margin: 4px;
  padding: 2px;

  @media (min-width: 800px) {
    padding: 6px;
  }
`;

const StyledGithub = styled(Icon)`
  color: ${({ theme }) => theme.colors.darkGrey};
  width: 24px;
  height: 24px;
`;

const StyledButtonText = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  padding: 0 4px;
`;

const Contact = () => {
  function onCryptorateGithubButtonClick() {
    window.open("https://github.com/MSzostaq/CryptoRate");
  }

  function onCryptorateDeployButtonClick() {
    window.open("https://cryptorate-app.herokuapp.com/dashboard#/");
  }

  function onTodoListGithubButtonClick() {
    window.open("https://github.com/MSzostaq/TODO-List");
  }

  function onTodoListDeployButtonClick() {
    window.open("https://ms-todo-list.herokuapp.com/#/");
  }

  function onTicTacToeGithubButtonClick() {
    window.open("https://github.com/MSzostaq/tic-tac-toe");
  }

  function onTicTacToeDeployButtonClick() {
    window.open("https://github.com/MSzostaq/tic-tac-toe");
  }

  return (
    <Wrapper id="projects">
      <BackgroundParticles />
      <ContentWrapper>
        <Title>Check out my projects</Title>
        <ProjectWrapper>
          <ProjectCard>
            <ProjectTitle>Cryptorate</ProjectTitle>
            <ProjectContent>
              My first React application. Cryptorate connects with external API
              - DatoCMS, has pagination and is fully responsive.
            </ProjectContent>
            <IconWrapper>
              <StyledHtmlIcon icon="html_24" />
              <StyledCssIcon icon="css_24" />
              <StyledJsIcon icon="js_24" />
              <StyledReactIcon icon="react_24" />
              <StyledDatocmsIcon icon="datocms_24" />
            </IconWrapper>
            <ButtonWrapper>
              <StyledButton>
                <StyledGithub icon="github_24" />
                <StyledButtonText onClick={onCryptorateGithubButtonClick}>
                  Code
                </StyledButtonText>
              </StyledButton>
              <StyledButton onClick={onCryptorateDeployButtonClick}>
                Demo
              </StyledButton>
            </ButtonWrapper>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>TODO-List</ProjectTitle>
            <ProjectContent>
              Clone of Google Keep, simple TODO List made with React,
              React-Redux and Redux-Saga. It has most of Google Keep features.
            </ProjectContent>
            <IconWrapper>
              <StyledHtmlIcon icon="html_24" />
              <StyledCssIcon icon="css_24" />
              <StyledJsIcon icon="js_24" />
              <StyledReactIcon icon="react_24" />
              <StyledReduxIcon icon="redux_24" />
            </IconWrapper>
            <ButtonWrapper>
              <StyledButton>
                <StyledGithub icon="github_24" />
                <StyledButtonText onClick={onTodoListGithubButtonClick}>
                  Code
                </StyledButtonText>
              </StyledButton>
              <StyledButton onClick={onTodoListDeployButtonClick}>
                Demo
              </StyledButton>
            </ButtonWrapper>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>Tic-tac-toe</ProjectTitle>
            <ProjectContent>
              Tic-tac-toe is a simple game with three game modes: local, vs
              computer and multiplayer (socket.io).
            </ProjectContent>
            <IconWrapper>
              <StyledHtmlIcon icon="html_24" />
              <StyledCssIcon icon="css_24" />
              <StyledJsIcon icon="js_24" />
              <StyledReactIcon icon="react_24" />
              <StyledReduxIcon icon="redux_24" />
            </IconWrapper>
            <ButtonWrapper>
              <StyledButton>
                <StyledGithub icon="github_24" />
                <StyledButtonText onClick={onTicTacToeGithubButtonClick}>
                  Code
                </StyledButtonText>
              </StyledButton>
              <StyledButton onClick={onTicTacToeDeployButtonClick}>
                Demo
              </StyledButton>
            </ButtonWrapper>
          </ProjectCard>
        </ProjectWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Contact;
