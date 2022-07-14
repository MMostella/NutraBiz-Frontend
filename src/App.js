import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/AboutUs";
import Product from "./components/Product";
import Centers from "./components/Centers";
import Order from "./components/Order";

import Logo from "./pictures/NB.png";
import "./App.css";

import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0.5%;
  height: 100vh;
  background-color: Grey;
  overflow: hidden;
  /* border: 1px solid red; */

  .navLogo {
    height: 100px;
    width: 100px;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 5%;
    height: 8%;
    width: 90%;
    /* border: 1px solid green; */
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 93%;
    width: 100%;
    border-top: 1px solid black;
  }
`;

const linkStyle = {
  display: "flex",
  justifyContent: "center",
  color: "black",
  textDecoration: "none",
  padding: "2%",
};

function App() {
  return (
    <StyledApp>
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
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/centers" element={<Centers />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </StyledApp>
  );
}

export default App;
