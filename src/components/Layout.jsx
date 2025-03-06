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





export const servicesData = [
  {
    id: 1,
    title: "BRANDING",
    description: "Expert psychiatric care for ADHD, anxiety, depression, bipolar disorder, and more.",
  
    image: "https://placehold.co/1200?text=Neuropsychiatry"
  },
  {
    id: 2,
    title: "SOCIAL MEDIA MARKETING",
    description: "Advanced neuropsychiatric interventions for cognitive and emotional well-being.",
 
    image: "https://placehold.co/1200?text=Neuropsychiatry"
  },
  {
    id: 3,
    title: "PR ACTIVITIES",
    description: "Personalized counseling for individuals, couples, and families.",
  
    image: "https://placehold.co/1200?text=Counseling+%26+Therapy"
  },
  {
    id: 4,
    title: "WEB DES/DEV",
    description: "Holistic therapies including stress management and mindfulness training.",
   
    image: "https://placehold.co/1200?text=Mindfulness+%26+Wellness"
  },
  
];

const Layout = () => {
  return (
   
      <div className="layout-main">
        <Hero />
        <RevealOnScroll props = "DESIGN WITHOUT MEANING  IS  JUST AN ANOTHER  IMAGE  WITH   NOISE!"/>
     <Hover servicesData={servicesData} />
        {/* <Services />
        <ScreenSix /> */}
      
           <Dual />
          
           <ScreenSixScrollPower />
       
        <ScrollComponent />
      
     
       


      </div>
  
  );
};

export default Layout;
