import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 120%;
  right: -120px;

  @media (min-width: 800px) {
    top: 50%;
    right: 8px;
  }
`;

const Dot = styled.a`
  background-color: ${({ theme }) => theme.colors.js};
  border-radius: 50%;
  cursor: pointer;
  margin: 4px;
  width: 8px;
  height: 8px;

  ${({ active, theme }) => active && `width: 16px; height: 16px;`};
`;

const NavigationDots = ({ activeId, items, onItemClick }) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <Dot
          key={item.id}
          active={item.id === activeId}
          onClick={(event) => onItemClick(event, item)}
        />
      ))}
    </Wrapper>
  );
};

export default NavigationDots;
