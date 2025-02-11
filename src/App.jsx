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

import image1 from "../public/mellow1.png";
import image3 from "../public/mellow3.png";
import image2 from "../public/mellow2.png";

const clientsData = {
  client1: {
    images: [image1, image2, image3],
    content: {
      title: "Concrete Dreams",
      services: "Product Design, Manufacturing",
      year: "2023",
      description:
        "Specializing in modern concrete planters that blend functionality with aesthetic appeal. Our planters are designed to enhance any space while providing optimal growing conditions for your plants.",
    },
  },
  client2: {
    images: [image2, image3, image1],
    content: {
      title: "Desk Garden",
      services: "Product Design, Sustainability, Branding",
      year: "2022",
      description:
        "Revolutionizing workspace greenery with our innovative desk planters. Each piece is thoughtfully crafted to bring nature into your office environment while maintaining a minimal footprint.",
    },
  },
  client3: {
    images: [image3, image1, image2],
    content: {
      title: "Living Tables",
      services: "Furniture Design, Craftsmanship",
      year: "2023",
      description:
        "Creating functional art through our handcrafted tables. Each piece combines organic materials with modern design principles to deliver furniture that serves as both a practical surface and a conversation starter.",
    },
  },
  client4: {
    images: [image1, image2, image3],
    content: {
      title: "Block Works",
      services: "Architectural Elements, Design",
      year: "2021",
      description:
        "Reimagining breeze blocks for contemporary spaces. Our designs provide privacy and ventilation while creating stunning geometric patterns that transform ordinary walls into architectural features.",
    },
  },
  client5: {
    images: [image2, image3, image1],
    content: {
      title: "Wall Craft",
      services: "Interior Design, Installation",
      year: "2022",
      description:
        "Elevating interior spaces with our distinctive wall cladding solutions. We combine traditional materials with contemporary patterns to create surfaces that add depth and character to any room.",
    },
  },
  client6: {
    images: [image3, image1, image2],
    content: {
      title: "Form & Flow",
      services: "Sculptural Art, Custom Design",
      year: "2023",
      description:
        "Pushing the boundaries of concrete as an artistic medium. Our sculptures challenge perceptions of industrial materials, creating fluid forms that seem to defy the material's rigid nature.",
    },
  },
};

export const themes = [
  {
    primaryColor: "#fff",
    secondaryColor: "black",
    backgroundColor: "#494848",
 
  },
  {
    primaryColor: "#fff", // Dodger Blue
    secondaryColor: "black", // Tomato Red
    backgroundColor: "violet", // Deep Black
  },
  {
    primaryColor: "white",
    secondaryColor: "#000",
    backgroundColor: "white",
  },
  {
    primaryColor: "#fff",
    secondaryColor: "black",
    backgroundColor: "orange",
  },
  {
    primaryColor: "#fff", // Vibrant Orange
    secondaryColor: "#000", // Fresh Green
    backgroundColor: "seagreen", // Light Gray
  },
  {
    primaryColor: "white", // Strong Blue
    secondaryColor: "#000", // Pink Magenta
    backgroundColor: "pink", // Pure White
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
          <Route path="screensix" element={<ScreenSix />} />
          <Route path="products" element={<Products />} />
          <Route path="ani" element={<AnimatedServices />} />
          <Route path="floating-dock" element={<FloatingDock />} />
          <Route path="client-1" element={<Client {...clientsData.client1} />} />
          <Route path="client-2" element={<Client {...clientsData.client2} />} />
          <Route path="client-3" element={<Client {...clientsData.client3} />} />
          <Route path="client-4" element={<Client {...clientsData.client4} />} />
          <Route path="client-5" element={<Client {...clientsData.client5} />} />
          <Route path="client-6" element={<Client {...clientsData.client6} />} />
          <Route path="services" element={<Services />} />
          <Route path="works" element={<Works />} />
          <Route path="fancy" element={<Fancy />} />
        </Routes>
      </ColorProvider>
    </Router>
  );
}

export default App;
