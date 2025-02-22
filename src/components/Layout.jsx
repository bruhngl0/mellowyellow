import React from "react";
import Hero from "./Hero";
import ScreenSix from "./ScreenSix";
import "../styles/layout.scss";
import "../styles/noise-overlay.scss";
import Services from "./Services";
import ScreenSixScrollPower from "./ScreenSixScrollPower";
import Fancy from "./Fancy";
import Dual from "./Dual";
import ScrollComponent from "./ScrollComponent";
import RevealOnScroll from "./RevealOnScroll";
import Hover from "./Hover";


import image1 from "../../public/grid.jpg";
import image2 from "../../public/grid1.jpg";
import image3 from "../../public/grid2.jpg";
import image4 from "../../public/grid3.jpg";


export const servicesData = [
  {
    id: 1,
    title: "Branding",
    description: "Expert psychiatric care for ADHD, anxiety, depression, bipolar disorder, and more.",
  
    image: "https://placehold.co/1200?text=Neuropsychiatry"
  },
  {
    id: 2,
    title: "Social Media Marketing",
    description: "Advanced neuropsychiatric interventions for cognitive and emotional well-being.",
 
    image: "https://placehold.co/1200?text=Neuropsychiatry"
  },
  {
    id: 3,
    title: "Web Design/Development",
    description: "Personalized counseling for individuals, couples, and families.",
  
    image: "https://placehold.co/1200?text=Counseling+%26+Therapy"
  },
  {
    id: 4,
    title: "Social Dining",
    description: "Holistic therapies including stress management and mindfulness training.",
   
    image: "https://placehold.co/1200?text=Mindfulness+%26+Wellness"
  },
  
];

const Layout = () => {
  return (
   
      <div className="layout-main">
        <Hero />
     <Services />
     <Hover servicesData={servicesData} />
        {/* <Services />
        <ScreenSix /> */}
      
           <Dual />
           <RevealOnScroll />
           <ScreenSixScrollPower />
       
        <ScrollComponent />
     
       


      </div>
  
  );
};

export default Layout;
