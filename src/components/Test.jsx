import React from "react";
import "../styles/test.scss";
import { FaBars, FaSearch } from "react-icons/fa";
import FloatingDock from "./FloatingDock";

const Test = () => {
  return (
    <div className="identifont-container">
      <header className="identifont-header">
        
        <p>01/ DENTIFONT</p>
        <p>01/ DENTIFONT</p>
        <p>01/ DENTIFONT</p>
       
      </header>
      <div className="categories"  >
        
          <FloatingDock />
       
       
      </div>
      <div className="content">
        <div className="latest-fonts">
          <h3>Latest font inclusions</h3>
          <p>
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