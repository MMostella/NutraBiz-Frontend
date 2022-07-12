import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/AboutUs";
import Product from "./components/Product";
import Centers from "./components/Centers";
import Why from "./components/Why";
import Order from "./components/Order";
import "./App.css";

import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5%;
    width: 90%;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 93%;
    width: 99%;
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
          <h2>NutraBiz LLC</h2>
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
        <Link to="/why" style={linkStyle}>
          <h3>Why B2B</h3>
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
          <Route path="/why" element={<Why />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </StyledApp>
  );
}

export default App;
