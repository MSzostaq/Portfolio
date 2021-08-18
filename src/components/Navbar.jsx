import { Link } from "react-scroll";
import styled from "styled-components";

const StyledNavbar = styled.div`
  position: fixed;
  top: 16px;
  left: 16px;
  width: 100%;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        <Link
          activeClass="active"
          to="welcome"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Welcome
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Contact
        </Link>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
