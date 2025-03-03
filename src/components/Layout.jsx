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
        <RevealOnScroll props = "DESIGN WITHOUT MEANING IS JUST ANOTHER IMAGE IN THE NOISE"/>
     <Hover servicesData={servicesData} />
        {/* <Services />
        <ScreenSix /> */}
      
           <Dual />
           <RevealOnScroll props = "Let me optimize the component further to minimize unnecessary rerenders. I'll use several React optimization techniques." />
           <ScreenSixScrollPower />
       
        <ScrollComponent />
      
     
       


      </div>
  
  );
};

export default Layout;
