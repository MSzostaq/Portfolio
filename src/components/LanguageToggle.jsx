import React from "react";
import styled from "styled-components";
import uk_circle from "assets/uk_circle.png";
import pl_circle from "assets/pl_circle.png";

const ToggleButton = styled.button`
  background-color: #696969;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: ${({ isOn }) => (isOn ? "flex-end" : "flex-start")};
  margin-right: 12px;
  width: 56px;
  height: 32px;
`;

const Switch = styled.div`
  background: url(${({ isOn }) => (isOn ? pl_circle : uk_circle)});
  background-size: cover;
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  width: 32px;
  height: 32px;
`;

const LanguageToggle = ({ value, onChange }) => {
  function onLanguageToggleClick() {
    onChange(!value);
  }

  return (
    <ToggleButton isOn={value} onClick={onLanguageToggleClick}>
      <Switch isOn={value} />
    </ToggleButton>
  );
};

export default LanguageToggle;
