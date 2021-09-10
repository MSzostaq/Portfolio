import React from "react";
import styled from "styled-components";
import Particles from "react-particles-js";
import Typed from "react-typed";
import Button from "components/Button";
import Icon from "components/Icon";
import ProjectCard from "components/ProjectCard";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
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

const ButtonWrapper = styled.div`
  display: flex;
  grid-gap: 4px;
  margin: 4px;
`;

const StyledGithub = styled(Icon)`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 0 2px;
  width: 24px;
  height: 24px;
`;

const Contact = () => {
  return (
    <Wrapper id="projects">
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
        <Title strings={["Check out my projects"]} typeSpeed={40} />
        <ProjectWrapper>
          <ProjectCard>
            <ProjectTitle>Cryptorate</ProjectTitle>
            <ProjectContent>
              My first React application. Cryptorate comnnects with external API
              - DatoCMS. Cryptorate has pagination, shows the data and is fully
              responsive.
            </ProjectContent>
            <IconWrapper>
              <StyledHtmlIcon icon="html_24" />
              <StyledCssIcon icon="css_24" />
              <StyledJsIcon icon="js_24" />
              <StyledReactIcon icon="react_24" />
              <StyledDatocmsIcon icon="datocms_24" />
            </IconWrapper>
            <ButtonWrapper>
              <Button>
                <StyledGithub icon="github_24" />
                Check out code
              </Button>
              <Button>Try it out</Button>
            </ButtonWrapper>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>TODO-List</ProjectTitle>
            <ProjectContent>
              Clone of Google Keep, simple TODO List made with React,
              React-Redux and Redux-Saga.
            </ProjectContent>
            <IconWrapper>
              <StyledHtmlIcon icon="html_24" />
              <StyledCssIcon icon="css_24" />
              <StyledJsIcon icon="js_24" />
              <StyledReactIcon icon="react_24" />
              <StyledReduxIcon icon="redux_24" />
            </IconWrapper>
            <ButtonWrapper>
              <Button>
                <StyledGithub icon="github_24" />
                Check out code
              </Button>
              <Button>Try it out</Button>
            </ButtonWrapper>
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
            <ButtonWrapper>
              <Button>
                <StyledGithub icon="github_24" />
                Check out code
              </Button>
              <Button>Try it out</Button>
            </ButtonWrapper>
          </ProjectCard>
        </ProjectWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Contact;
