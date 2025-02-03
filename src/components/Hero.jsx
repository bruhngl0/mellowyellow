import React from "react";
import Waves from "./Waves";
import "../styles/hero.scss";
import ScreenVideo from "./screenVideo";
import AnimatedServices from "./AnimatedServices";
import Test from "./Test";
import { useColor } from "../context/ColorContext"; // Import the theme

const Hero = () => {
  const { theme } = useColor(); // Get the global theme

  return (
    <div 
      className="hero1-main"
      style={{
        backgroundColor: theme.backgroundColor, // Apply theme background
        color: theme.primaryColor, // Apply theme text color
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <div className="hero1-1" style={{ backgroundColor: theme.backgroundColor }}>
        <div className="hero1-1-1">
          <p style={{ color: theme.primaryColor  }}> MELLOW&nbsp;&nbsp;YELLOW </p>
        </div>
        <div className="hero1-1-2">
          <div className="hero1-1-2-1">
            <ul>
              <li style={{ color: theme.primaryColor }}>◉ SEASONS </li>
              <li style={{ color: theme.primaryColor }}>◉ DESIGNS </li>
              <li style={{ color: theme.primaryColor }}>◉ TYPOGRAPHY </li>
            </ul>
          </div>
          <div 
            className="hero1-1-2-2"
          ></div>
        </div>
      </div>

      <div className="hero1-3">
        <div className="hero1-3-1"style={{ backgroundColor: theme.secondaryColor }} >
          <div 
            className="hero1-3-1-1"
          ></div>
          <div className="test-container">
            <Test />
          </div>
        </div>

        <div className="hero1-3-2" style={{ backgroundColor: theme.secondaryColor }}>
          <div className="hero1-3-2-1">
            <AnimatedServices />
          </div>
          <div className="hero1-3-2-2">
            <ScreenVideo />
          </div>
        </div>
      </div>

      <div className="hero1-2">
        <Waves />
      </div>
    </div>
  );
};

export default Hero;
