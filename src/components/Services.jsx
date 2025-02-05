import React from "react";
import "../styles/Services.scss";
import { useColor } from "../context/ColorContext";

const Services = () => {
  const { theme } = useColor();
  return (
    <div className="services-main" style={{ backgroundColor: theme.secondaryColor }}>
      <div className="services-content">
        <p style={{color: theme.backgroundColor}}>Your Creative Journey Starts Here! <br/>▶︎ •၊၊||၊|။|||| |</p>
      </div>
    </div>
  );
};

export default Services;
