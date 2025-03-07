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
    description: "From logo design to brand storytelling, we ensure every element reflects your vision and resonates with your audience.",
  
    image: "https://placehold.co/1200?text=Neuropsychiatry"
  },
  {
    id: 2,
    title: "SOCIAL MEDIA MARKETING",
    description: "Our approach combines creativity, strategy, and analytics to ensure your brand stands out in the digital crowd.",
 
    image: "https://placehold.co/1200?text=Neuropsychiatry"
  },
  {
    id: 3,
    title: "PR ACTIVITIES",
    description: "From media outreach to event planning, our solutions are designed to connect with the right audience, at the right time.",
  
    image: "https://placehold.co/1200?text=Counseling+%26+Therapy"
  },
  {
    id: 4,
    title: "WEB DES/DEV",
    description: "Our team combines cutting-edge design with robust technology to create digital platforms that reflect your brand and achieve your goals.",
   
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
