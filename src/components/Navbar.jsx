import { Link } from "react-scroll";
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
  z-index: 999;
  width: 100%;
  height: 56px;

  .active {
    background-color: rgba(211, 211, 211, 0.2);
    border-radius: 4px;
  }
`;

const LinkWrapper = styled.ul``;

const StyledLink = styled(Link)`
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
`;

const IconWarpper = styled.div``;

const StyledImage = styled(motion.img)`
  cursor: pointer;
  margin: 0 8px;
  width: 42px;
  height: 42px;
`;

const changeLanguage = (lng) => {
  return () => {
    console.log(`language changed to ${lng}`);
    i18n.changeLanguage(lng);
  };
};

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <StyledNavbar>
      <LinkWrapper>
        <StyledLink
          activeClass="active"
          to="welcome"
          spy={true}
          hashSpy={true}
          smooth={true}
          duration={300}
        >
          {t("nav-welcome")}
        </StyledLink>
        <StyledLink
          activeClass="active"
          to="about"
          spy={true}
          hashSpy={true}
          smooth={true}
          duration={300}
        >
          {t("nav-skills")}
        </StyledLink>
        <StyledLink
          activeClass="active"
          to="projects"
          spy={true}
          hashSpy={true}
          smooth={true}
          duration={300}
        >
          {t("nav-projects")}
        </StyledLink>
        <StyledLink
          activeClass="active"
          to="contact"
          spy={true}
          hashSpy={true}
          smooth={true}
          duration={300}
        >
          {t("nav-contact")}
        </StyledLink>
      </LinkWrapper>
      <IconWarpper>
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
      </IconWarpper>
    </StyledNavbar>
  );
};

export default Navbar;
