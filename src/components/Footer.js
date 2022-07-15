import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledFooter = styled.div`
  footer {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 1% 0;
    border-top: 1px solid black;
  }
  .images {
    display: flex;
  }
  footer img {
    margin: 0 1%;
    width: 40%;
  }
  .footerLinks {
    margin: 2% 0 0 -45%;
  }
  h4:hover {
    color: darkGrey;
  }
  h5:hover {
    color: darkGrey;
  }
`;

const linkStyle = {
  display: "flex",
  justifyContent: "flex-start",
  color: "black",
  textDecoration: "none",
  margin: "-20% 0",
};

export default function Footer() {
  return (
    <StyledFooter>
      <footer>
        <div className="images">
          <img
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGlsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="pills"
          />
          <img
            src="https://images.unsplash.com/photo-1587854680352-936b22b91030?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGlsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="pills"
          />
        </div>
        <div className="footerLinks">
          <Link
            to="/"
            style={linkStyle}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <h4>NutraBiz LLC</h4>
          </Link>
          <Link
            to="/order"
            style={linkStyle}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <h5>Order</h5>
          </Link>
          <Link
            to="/about"
            style={linkStyle}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <h5>About</h5>
          </Link>
          <Link
            to="/"
            style={linkStyle}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <h5>Contact</h5>
          </Link>
          <Link
            to="/login"
            style={linkStyle}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <h5>Login</h5>
          </Link>
        </div>
      </footer>
    </StyledFooter>
  );
}
