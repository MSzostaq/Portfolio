import React from "react";
import styled from "styled-components";

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

const Item = styled.li`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-family: sans-serif;
  font-size: ${({ theme }) => theme.fontSize.l};
  padding: 0 2px;
`;

const About = () => {
  return (
    <Wrapper id="about">
      <Title>Known technologies</Title>
      <Content>
        <Item>React.js</Item>
        <Item>Redux</Item>
        <Item>JavaScript (also ES6 features)</Item>
        <Item>HTML</Item>
        <Item>CSS + styled-components</Item>
        <Item>Git + GitHub</Item>
        <Item>Basics of TypeScript</Item>
      </Content>
    </Wrapper>
  );
};

export default About;
