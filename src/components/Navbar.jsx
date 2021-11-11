import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import LanguageToggle from "components/LanguageToggle";

const StyledNavbar = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;

  @media (min-width: 1800px) {
    height: 80px;
  }
`;

const LinkWrapper = styled.ul`
  margin-left: 8px;
`;

const StyledLink = styled.a`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  margin: 4px 2px;
  padding: 4px;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 6px 2px;
  }

  @media (min-width: 1800px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: 12px 6px;
  }

  ${({ active, theme }) =>
    active && `border-bottom: 2px solid ${theme.colors.js}`};
`;

const Navbar = ({ activeId, items, onItemClick }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [value, setValue] = useState(false);
  function onValueChange(newValue) {
    setValue(newValue);
    changeLanguage(newValue ? "pl" : "en");
  }

  return (
    <StyledNavbar>
      <LinkWrapper>
        {items.map((item) => (
          <StyledLink
            key={item.id}
            active={item.id === activeId}
            onClick={(event) => onItemClick(event, item)}
          >
            {t(item.name)}
          </StyledLink>
        ))}
      </LinkWrapper>
      <LanguageToggle value={value} onChange={onValueChange} />
    </StyledNavbar>
  );
};

export default Navbar;
