import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
// import Footer from "./Footer";
// import Signin from "./Signin";
function HomeWithHeader() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}
function CartWithHeader() {
  return (
    <>
      <Header />
      <Cart />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/cart" element={<CartWithHeader />} />
          <Route path="/" element={<HomeWithHeader />} />
          {/* <Route path="/login" element={<Signin />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}
export default App;
