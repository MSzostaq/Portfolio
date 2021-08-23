import { Link } from "react-scroll";
import styled from "styled-components";
import Icon from "components/Icon";

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  position: fixed;
  width: 100%;

  .active {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }
`;

const StyledList = styled.ul``;

const StyledLink = styled(Link)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
  margin: 4px;
  padding: 4px;
`;

const ButtonList = styled.div``;

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.white};
  margin: 8px;
  width: 40px;
  height: 40px;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledList>
        <StyledLink
          activeClass="active"
          to="welcome"
          spy={true}
          smooth={true}
          offset={0}
          duration={400}
        >
          Welcome
        </StyledLink>
        <StyledLink
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={400}
        >
          About
        </StyledLink>
        <StyledLink
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={400}
        >
          Projects
        </StyledLink>
        <StyledLink
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={400}
        >
          Contact
        </StyledLink>
      </StyledList>
      <ButtonList>
        <StyledIcon icon="sun" />
        <StyledIcon icon="language" />
      </ButtonList>
    </StyledNavbar>
  );
};

export default Navbar;
