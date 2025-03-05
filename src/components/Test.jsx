import React from "react";
import "../styles/test.scss";
import { FaBars, FaSearch } from "react-icons/fa";
import FloatingDock from "./FloatingDock";
import { useColor } from "../context/ColorContext";

const Test = () => {
  const { theme } = useColor();
  return (
    <div className="identifont-container" style={{ backgroundColor: theme.secondaryColor }}>
      <header className="identifont-header">
        
        <p>01/ &nbsp; &nbsp; BRAND STRATEGY</p>
        <p>02/ &nbsp; &nbsp; TAILORED COLLABORATIONS</p>
        <p>03/ &nbsp; &nbsp; DATA-DRIVEN RESULTS</p>
       
      </header>
      <div className="categories"  >
        
          <FloatingDock />
       
       
      </div>
      <div className="content" style={{ backgroundColor: theme.secondaryColor }}>
        <div className="latest-fonts" style={{backgroundColor: theme.secondaryColor}}>
          <h3>Your Story, Perfectly Told
          </h3>
          <p style={{color: theme.primarycolor}}>
          At Mellow Yellow, we create content that does more than just catch the eye—it captures hearts and drives action. From striking visuals to powerful words, our content creation services are tailored to elevate your brand and engage your audience.

          </p>
        </div>
       
      </div>
    </div>
  );
};

export default Test;