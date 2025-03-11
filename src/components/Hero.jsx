import React from "react";
import Waves from "./Waves";
import "../styles/hero.scss";
import ScreenVideo from "./screenVideo";
import AnimatedServices from "./AnimatedServices";
import Test from "./Test";
import { useColor } from "../context/ColorContext";

const Hero = () => {
  const { theme } = useColor();

  return (
    <div
      className="hero1-main"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.primaryColor,
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <div className="hero1-1" style={{ backgroundColor: theme.backgroundColor }}>
        <div className="hero1-1-1">
          <p style={{ color: "black" }}>MELLOW&nbsp;&nbsp;YELLOW</p>
        </div>
        <div className="hero1-1-2">
          <div className="hero1-1-2-1">
            <ul>
              <li style={{ color: "black" }}>◉ FEATURED</li>
              <li style={{ color: "black" }}>◉ WORKS</li>
              <li style={{ color: "black" }}>◉ ENQUIRY</li>
            </ul>
          </div>
          <div className="hero1-1-2-2"></div>
        </div>
      </div>

      <div className="hero1-3">
        <div className="hero1-3-1" style={{ backgroundColor: theme.secondaryColor }}>
          <div className="test-container">
            <Test />
          </div>
        </div>

        <div className="hero1-3-2" style={{ backgroundColor: theme.secondaryColor }}>
          <div className="hero1-3-2-1">
            <AnimatedServices />
          </div>
          <div className="hero1-3-2-2" style={{ border: `1px solid black` }}>
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
