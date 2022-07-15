import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/AboutUs";
import Product from "./components/Product";
import Centers from "./components/Centers";
import Order from "./components/Order";
import Login from "./components/Login";
import Register from "./components/Register";

import "./App.css";

import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background-color: Grey;
  overflow: hidden;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-top: 1px solid black;
  }
`;

function App() {
  return (
    <StyledApp>
      <Nav />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/centers" element={<Centers />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </StyledApp>
  );
}

export default App;
