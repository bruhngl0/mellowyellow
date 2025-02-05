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
        
        <p>01/ DENTIFONT</p>
        <p>01/ DENTIFONT</p>
        <p>01/ DENTIFONT</p>
       
      </header>
      <div className="categories"  >
        
          <FloatingDock />
       
       
      </div>
      <div className="content" style={{ backgroundColor: theme.secondaryColor }}>
        <div className="latest-fonts" style={{backgroundColor: theme.secondaryColor}}>
          <h3>Latest font inclusions</h3>
          <p style={{color: theme.primarycolor}}>
            December 2023 - 34 typefaces curated by P.A. Malley. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
            December 2023 - 34 typefaces curated by P.A. Malley. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
            December 2023 - 34 typefaces curated by P.A. Malley. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default Test;