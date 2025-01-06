import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Product from "./components/Product";
import Riview from "./components/Riview";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="menu">
          <Menu />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="products">
          <Product />
        </div>

        <div id="riview">
          <Riview />
        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default App;
