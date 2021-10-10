import styled from "styled-components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import i18n from "i18n";
import pl from "constants/pl.png";
import uk from "constants/uk.png";

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
`;

const LinkWrapper = styled.ul``;

const StyledLink = styled.a`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  margin: 4px 2px;
  padding: 4px;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 6px 2px;
  }
  ${({ active, theme }) =>
    active && `border-bottom: 2px solid ${theme.colors.js}`};
`;

const IconWrapper = styled.div`
  margin-right: 12px;
`;

const StyledImage = styled(motion.img)`
  cursor: pointer;
  margin: 0 8px;
  width: 42px;
  height: 42px;
`;

const changeLanguage = (lng) => {
  return () => {
    i18n.changeLanguage(lng);
  };
};

const Navbar = ({ activeId, items, onItemClick }) => {
  const { t } = useTranslation();

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
      <IconWrapper>
        <StyledImage
          onClick={changeLanguage("en")}
          src={uk}
          whileHover={{ scale: 1.1 }}
        />
        <StyledImage
          onClick={changeLanguage("pl")}
          src={pl}
          whileHover={{ scale: 1.1 }}
        />
      </IconWrapper>
    </StyledNavbar>
  );
};

export default Navbar;
