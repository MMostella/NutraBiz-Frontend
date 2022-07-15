import { Link } from "react-router-dom";
import Logo from "../pictures/NB.png";

import styled from "styled-components";

const StyledNav = styled.div`
  .navLogo {
    height: 100px;
    width: 100px;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 5%;
    height: 80px;
    width: 90%;
  }
  h3:hover {
    color: darkGrey;
  }
`;

const linkStyle = {
  display: "flex",
  justifyContent: "center",
  color: "black",
  textDecoration: "none",
};

export default function Nav() {
  return (
    <StyledNav>
      <nav>
        <Link to="/" style={linkStyle}>
          <img src={Logo} className="navLogo" alt="small logo" />
        </Link>
        <Link to="/about" style={linkStyle}>
          <h3>About Us</h3>
        </Link>
        <Link to="/product" style={linkStyle}>
          <h3>Product</h3>
        </Link>
        <Link to="/centers" style={linkStyle}>
          <h3>Weight Loss Centers</h3>
        </Link>
        <Link to="/order" style={linkStyle}>
          <h3>Order Online</h3>
        </Link>
      </nav>
    </StyledNav>
  );
}
