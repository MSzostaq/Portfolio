import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.icons};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const ProjectWrapper = styled.div`
  display: flex;
  margin: 8px;
`;

const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  margin: 12px;
  width: 400px;
  height: 400px;
`;

const Contact = () => {
  return (
    <Wrapper id="projects">
      <Title>Check out my projects and GitHub profile!</Title>
      <ProjectWrapper>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectWrapper>
    </Wrapper>
  );
};

export default Contact;
