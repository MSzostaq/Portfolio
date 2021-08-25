import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  margin: 8px;
  position: absolute;
  width: 200px;
  height: 20vh;
`;

const Contact = () => {
  return (
    <Wrapper id="projects">
      <Title>Check out my projects!</Title>
      <Content>
        <ProjectCard />
      </Content>
    </Wrapper>
  );
};

export default Contact;
