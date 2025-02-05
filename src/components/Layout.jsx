import React from "react";
import Hero from "./Hero";
import ScreenSix from "./ScreenSix";
import Products from "./Products";
import Footer from "./Footer";
import AnimatedServices from "./AnimatedServices";
import Test from "./Test";
import "../styles/layout.scss";
import "../styles/noise-overlay.scss";
import Services from "./Services";
const Layout = () => {
  return (
    <div className="noise-overlay">
      <div className="layout-main">
        <Hero />
        <Services />
        <ScreenSix />
      
      </div>
    </div>
  );
};

export default Layout;
