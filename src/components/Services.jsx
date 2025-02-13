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
      
        <p style={{color: theme.backgroundColor}}> DESIGN WITHOUT MEANING IS JUST ANOTHER IMAGE IN THE NOISE</p>
       
      </div>
    </div>
  );
};

export default Services;
