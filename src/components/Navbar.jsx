import { Link } from "react-scroll";
import styled from "styled-components";

const StyledNavbar = styled.div`
  position: fixed;
  top: 16px;
  left: 16px;
  width: 100%;

  .active {
    border-bottom: 2px solid #000;
  }
`;

const StyledLink = styled(Link)`
  font-size: 16px;
  padding: 4px;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
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
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
