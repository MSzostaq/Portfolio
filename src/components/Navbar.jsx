import { Link } from "react-scroll";
import styled from "styled-components";
import Toggle from "components/Toggle";

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  margin: 8px 2px;

  .active {
    background-color: rgba(255, 255, 255, 0.3);
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
  margin: 6px 2px;
  padding: 4px 8px;

  @media (min-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 6px 2px;
  }
`;

const Navbar = () => {
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
          Welcome
        </StyledLink>
        <StyledLink
          activeClass="active"
          to="about"
          spy={true}
          hashSpy={true}
          smooth={true}
          duration={300}
        >
          Skills
        </StyledLink>
        <StyledLink
          activeClass="active"
          to="projects"
          spy={true}
          hashSpy={true}
          smooth={true}
          duration={300}
        >
          Projects
        </StyledLink>
        <StyledLink
          activeClass="active"
          to="contact"
          spy={true}
          hashSpy={true}
          smooth={true}
          duration={300}
        >
          Contact
        </StyledLink>
      </LinkWrapper>
      <Toggle />
    </StyledNavbar>
  );
};

export default Navbar;
