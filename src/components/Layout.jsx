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
import RevealOnScroll from "./RevealOnScroll";

const Layout = () => {
  return (
   
      <div className="layout-main">
        <Hero />
     <Services />
        {/* <Services />
        <ScreenSix /> */}
      
           <Dual />
           <RevealOnScroll />
           <ScreenSixScrollPower />
       
        <ScrollComponent />
     
       


      </div>
  
  );
};

export default Layout;
