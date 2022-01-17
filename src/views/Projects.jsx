import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Icon from "components/Icon";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
  margin-top: 48px;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    margin-top: auto;
    margin-bottom: 16px;
  }

  @media (min-width: 1800px) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    margin-top: auto;
    margin-bottom: 32px;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  width: 100%;
  height: 100%;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const ProjectCard = styled.div`
  background-color: rgba(0, 0, 102, 0.3);
  border-radius: 8px;
  margin: 4px;
  padding: 4px;
  width: 90vw;
  height: 28vh;

  @media (min-width: 800px) {
    width: 30vw;
    height: 60vh;
    margin: 8px;
  }

  @media (min-width: 880px) {
    width: 30vw;
    height: 56vh;
  }

  @media (min-width: 920px) {
    width: 30vw;
    height: 46vh;
  }

  @media (min-width: 1200px) {
    width: 30vw;
    height: 42vh;
  }

  @media (min-width: 1800px) {
    width: 30vw;
    height: 34vh;
  }
`;

const ProjectTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  margin: 8px 4px;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: 8px;
  }

  @media (min-width: 1800px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    margin: 24px 8px;
  }
`;

const ProjectContent = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: 1.2;
  margin: 4px;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 8px;
  }

  @media (min-width: 1800px) {
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 22px 8px;
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

  @media (min-width: 1800px) {
    width: 64px;
    height: 64px;
  }
`;

const StyledCssIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.css};
  margin: 6px;
  width: 48px;
  height: 48px;

  @media (min-width: 1800px) {
    width: 64px;
    height: 64px;
  }
`;

const StyledJsIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.js};
  margin: 6px;
  width: 48px;
  height: 48px;

  @media (min-width: 1800px) {
    width: 64px;
    height: 64px;
  }
`;

const StyledReactIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.react};
  margin: 6px;
  width: 48px;
  height: 48px;

  @media (min-width: 1800px) {
    width: 64px;
    height: 64px;
  }
`;

const StyledReduxIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.redux};
  margin: 6px;
  width: 48px;
  height: 48px;

  @media (min-width: 1800px) {
    width: 64px;
    height: 64px;
  }
`;

const StyledDatocmsIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.datoCMS};
  margin: 6px;
  width: 48px;
  height: 48px;

  @media (min-width: 1800px) {
    width: 64px;
    height: 64px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin: 4px;

  @media (min-width: 800px) {
    margin: 24px 4px;
  }
`;

const StyledButton = styled(motion.button)`
  background-color: rgba(234, 234, 234, 0.2);
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 4px;
  padding: 4px;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    padding: 6px 8px;
  }

  @media (min-width: 1800px) {
    font-size: ${({ theme }) => theme.fontSize.l};
    padding: 8px 10px;
  }
`;

const StyledGithub = styled(Icon)`
  color: ${({ theme }) => theme.colors.silver};
  width: 20px;
  height: 20px;

  @media (min-width: 800px) {
    width: 24px;
    height: 24px;
  }

  @media (min-width: 1800px) {
    width: 32px;
    height: 32px;
  }
`;

const Contact = () => {
  const { t } = useTranslation();

  function onCryptorateGithubButtonClick() {
    window.open("https://github.com/MSzostaq/CryptoRate");
  }

  function onCryptorateDeployButtonClick() {
    window.open("https://ms-cryptorate-app.herokuapp.com/dashboard#/");
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
    window.open("https://ms-xoxo.herokuapp.com/#/");
  }

  return (
    <Wrapper id="projects">
      <ContentWrapper>
        <Title>{t("project-title")}</Title>
        <ProjectWrapper>
          <ProjectCard>
            <ProjectTitle>Cryptorate</ProjectTitle>
            <ProjectContent>{t("cryptorate")}</ProjectContent>
            <IconWrapper>
              <StyledHtmlIcon icon="html_24" />
              <StyledCssIcon icon="css_24" />
              <StyledJsIcon icon="js_24" />
              <StyledReactIcon icon="react_24" />
              <StyledDatocmsIcon icon="datocms_24" />
            </IconWrapper>
            <ButtonWrapper>
              <StyledButton
                onClick={onCryptorateDeployButtonClick}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 2px rgb(255,255,255",
                }}
              >
                Demo
              </StyledButton>
              <StyledButton
                onClick={onCryptorateGithubButtonClick}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 2px rgb(255,255,255",
                }}
              >
                <StyledGithub icon="github_24" />
              </StyledButton>
            </ButtonWrapper>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>TODO-List</ProjectTitle>
            <ProjectContent>{t("todo-list")}</ProjectContent>
            <IconWrapper>
              <StyledHtmlIcon icon="html_24" />
              <StyledCssIcon icon="css_24" />
              <StyledJsIcon icon="js_24" />
              <StyledReactIcon icon="react_24" />
              <StyledReduxIcon icon="redux_24" />
            </IconWrapper>
            <ButtonWrapper>
              <StyledButton
                onClick={onTodoListDeployButtonClick}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 2px rgb(255,255,255",
                }}
              >
                Demo
              </StyledButton>
              <StyledButton
                onClick={onTodoListGithubButtonClick}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 2px rgb(255,255,255",
                }}
              >
                <StyledGithub icon="github_24" />
              </StyledButton>
            </ButtonWrapper>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>XOXO</ProjectTitle>
            <ProjectContent>{t("tic-tac-toe")}</ProjectContent>
            <IconWrapper>
              <StyledHtmlIcon icon="html_24" />
              <StyledCssIcon icon="css_24" />
              <StyledJsIcon icon="js_24" />
              <StyledReactIcon icon="react_24" />
              <StyledReduxIcon icon="redux_24" />
            </IconWrapper>
            <ButtonWrapper>
              <StyledButton
                onClick={onTicTacToeDeployButtonClick}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 2px rgb(255,255,255",
                }}
              >
                Demo
              </StyledButton>
              <StyledButton
                onClick={onTicTacToeGithubButtonClick}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 2px rgb(255,255,255",
                }}
              >
                <StyledGithub icon="github_24" />
              </StyledButton>
            </ButtonWrapper>
          </ProjectCard>
        </ProjectWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Contact;
