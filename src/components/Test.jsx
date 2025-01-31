import React from "react";
import "../styles/test.scss";
import { FaBars, FaSearch } from "react-icons/fa";

const Test = () => {
  return (
    <div className="identifont-container">
      <header className="identifont-header">
        
        <p>01/ DENTIFONT</p>
        <p>01/ DENTIFONT</p>
        <p>01/ DENTIFONT</p>
       
      </header>
      <div className="categories">
        <div className="category">
          <span>APPEARANCE</span>
          <span className="arrow">→</span>
        </div>
        <div className="category">
          <span>SIMILARITY</span>
          <span className="arrow">→</span>
        </div>
        <div className="category">
          <span>YEAR</span>
          <span className="arrow">→</span>
        </div>
       
      </div>
      <div className="content">
        <div className="latest-fonts">
          <h3>Latest font inclusions</h3>
         
        </div>
       
      </div>
    </div>
  );
};

export default Test;