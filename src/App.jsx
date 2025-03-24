import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";


import { ColorProvider, useColor } from "./context/ColorContext";

import Products from "./components/Products";
import Layout from "./components/Layout";
import ScreenSix from "./components/ScreenSix";
import AnimatedServices from "./components/AnimatedServices";
import Client from "./components/Client";
import FloatingDock from "./components/FloatingDock";
import Services from "./components/Services";
import Works from "./components/Works";
import Fancy from "./components/Fancy";
import Branding from "./components/Branding";
import Marketing from "./components/Marketing";
import SocialDining from "./components/SocialDining";
import Webdes from "./components/Webdes";
import ServiceShowcase from "./components/ServiceShowcase";
import Pr from "./components/Pr";
import Web from "./components/Web";
import ScrollComponent from "./components/ScrollComponent";





export const themes = [
  { 
    primaryColor: "#fff",
    secondaryColor: "black",
    backgroundColor: "white",
  },
  {
    primaryColor: "#fff", // Dodger Blue
    secondaryColor: "black", // Tomato Red
    backgroundColor: "#D4D689", // Deep Black
  },


  {
  primaryColor: "#fff",
    secondaryColor: "black",
    backgroundColor: "green",
  },
  {
    primaryColor: "#fff",
    secondaryColor: "black",
    backgroundColor: "orange",
  },
  {
    primaryColor: "white", // Strong Blue
    secondaryColor: "#000", // Pink Magenta
    backgroundColor: "pink", // Pure White
  },
  {
    primaryColor: "white",
    secondaryColor: "black",
    backgroundColor: "#494848",
  },
  {
    primaryColor: "white", // Deep Purple
    secondaryColor: "#000", // Warm Orange
    backgroundColor: "skyblue", // Soft White
  },
];

const App = () => {
  return (
    <Router>
      <ColorProvider>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/screensix" element={<ScreenSix />} />
          <Route path="/products" element={<Products />} />
          <Route path="/ani" element={<AnimatedServices />} />
          <Route path="/floating-dock" element={<FloatingDock />} />
          <Route path = "/branding" element= {<Branding />} />
          <Route path = "/marketing" element = {<Marketing/>} />
          <Route path = "/socialdining" element = {<SocialDining/>} />
          <Route path = "/webdes" element = {<Webdes/>} />
          <Route path = "/sc" element = {<ServiceShowcase />} />
          <Route path = "/clients" element={<ScrollComponent/>} />
        
          <Route path="/services" element={<Services />} />
          <Route path="/works" element={<Works />} />
          <Route path="/fancy" element={<Fancy />} />
          <Route path = "/pr" element={<Pr/>} />
          <Route path = "/web" element={<Web/>} />
        </Routes>
      </ColorProvider>
    </Router>
  );
}

export default App;
