import React from "react";
import Hero from "./Hero";
import ScreenSix from "./ScreenSix";
import "../styles/layout.scss";
import "../styles/noise-overlay.scss";
import Services from "./Services";
import ScreenSixScrollPower from "./ScreenSixScrollPower";
const Layout = () => {
  return (
    <div className="noise-overlay">
      <div className="layout-main">
        <Hero />
        {/* <Services />
        <ScreenSix /> */}

        <ScreenSixScrollPower />


      </div>
    </div>
  );
};

export default Layout;
