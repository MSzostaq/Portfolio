import React from "react";
import styled from "styled-components";

const ToggleButton = styled.button`
  background-color: ${({ isOn }) => (isOn ? "#76bd70" : "#e0e0e0")};
  border-radius: 16px;
  display: flex;
  justify-content: ${({ isOn }) => (isOn ? "flex-end" : "flex-start")};
  padding: 4px;
  width: 52px;
  height: 32px;

  ${({ size }) =>
    size === "jumbo" &&
    `
        border-radius: 64px;
        padding: 16px;
        width: 208px;
        height: 128px;

        ${Switch} {
          width: 96px;
          height: 96px;
        }
    `}
`;

const Switch = styled.div`
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  width: 24px;
  height: 24px;
`;

function Toggle({ size, value, onChange }) {
  function onButtonClick() {
    onChange(!value);
  }
  return (
    <ToggleButton size={size} isOn={value} onClick={onButtonClick}>
      <Switch />
    </ToggleButton>
  );
}

export default Toggle;
