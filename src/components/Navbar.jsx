import { Link } from "react-scroll";
import styled from "styled-components";

const StyledNavbar = styled.div`
  position: fixed;
  top: 16px;
  left: 16px;
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
          duration={500}
        >
          Welcome
        </StyledLink>
        <StyledLink
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          About
        </StyledLink>
        <StyledLink
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Contact
        </StyledLink>
      </StyledList>
    </StyledNavbar>
  );
};

export default Navbar;
