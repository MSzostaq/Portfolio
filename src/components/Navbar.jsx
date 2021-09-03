import { Link } from "react-scroll";
import styled from "styled-components";
import Icon from "components/Icon";

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  margin: 4px;
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
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  margin: 2px;
  padding: 4px;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: 4px;
  }
`;

const IconList = styled.div`
  margin: 0 4px;
`;

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  margin: 4px;
  width: 24px;
  height: 24px;

  @media (min-width: 800px) {
    margin: 8px;
    width: 40px;
    height: 40px;
  }
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
          duration={400}
        >
          Welcome
        </StyledLink>
        <StyledLink
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={400}
        >
          About
        </StyledLink>
        <StyledLink
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          duration={400}
        >
          Projects
        </StyledLink>
        <StyledLink
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={400}
        >
          Contact
        </StyledLink>
      </StyledList>
      <IconList>
        <StyledIcon icon="sun" />
        <StyledIcon icon="language" />
      </IconList>
    </StyledNavbar>
  );
};

export default Navbar;
