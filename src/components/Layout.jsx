import React from "react";
import Hero from "./Hero";
import ScreenSix from "./ScreenSix";
import "../styles/layout.scss";
import "../styles/noise-overlay.scss";
import Services from "./Services";
import ScreenSixScrollPower from "./ScreenSixScrollPower";
import Fancy from "./Fancy";
import Dual from "./Dual";
import ScrollComponent from "./ScrollComponent";
const Layout = () => {
  return (
    <div className="noise-overlay">
      <div className="layout-main">
        <Hero />
        {/* <Services />
        <ScreenSix /> */}
           <Dual />
        <ScreenSixScrollPower />
        <ScrollComponent />
     
       


      </div>
    </div>
  );
};

export default Layout;
