import React from "react";
import "../styles/Services.scss";
import { useColor } from "../context/ColorContext";
import ScrollPower from "./ScrollPower";
import RevealOnScroll from "./RevealOnScroll";

const Services = () => {
  const { theme } = useColor();
  return (
    <div className="services-main" style={{ backgroundColor: theme.secondaryColor }}>
      <div className="services-content">
      
        <p style={{color: theme.backgroundColor}}>  CHOOSE LOVE  CHOOSE FREEDOM <br/> <br/> CHOOSE US!</p>
        <RevealOnScroll />
      </div>
     <div className="servicesbg">
      <ScrollPower />
      </div>
    </div>
  );
};

export default Services;
