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
import Header from "./Header";
import Video from "./Video";





export const servicesData = [
  {
    id: 1,
    title: "BRANDING",
    description: "we help you craft a brand that not only stands out but leaves a lasting impression. From logo design to brand storytelling, we ensure every element reflects your vision and resonates with your audience.What We Offer:Brand Identity Creation: Logos, colour palettes, typography, and everything that defines your visual presence.Brand Strategy: Clear positioning and messaging that align with your goals and values.Storytelling: Crafting compelling narratives that communicate your brand’s essence.Rebranding: Transforming existing brands to refresh and redefine their identity",
    route: "/branding",
    image: "https://placehold.co/1200?text=Neuropsychiatry"
  },
  {
    id: 2,
    title: "SOCIAL MEDIA MARKETING",
    description: "we transform your social media presence into a powerful platform for connection and growth. Our approach combines creativity, strategy, and analytics to ensure your brand stands out in the digital crowd.What We Offer:Content Planning & Scheduling: A well-curated, consistent feed that reflects your brand identity.Engagement & Community Building: Meaningful interactions that build trust and loyalty.Performance Analytics: Insights to optimize your strategy and drive measurable results.",
    route: "/branding",
    image: "https://placehold.co/1200?text=Neuropsychiatry"
  },
  {
    id: 3,
    title: "PR ACTIVITIES",
    description: "we craft strategic PR campaigns that amplify your voice and strengthen your brand’s reputation. From media outreach to event planning, our solutions are designed to connect your message with the right audience, at the right time.What We Offer:Media Relations: Building strong connections with journalists and publications to get your story heard.Press Releases & Announcements: Professionally crafted communications that make an impact.Event Management: Seamlessly planned events to elevate your brand’s visibility.Crisis Management: Strategic solutions to safeguard and enhance your reputation.",
    route: "/branding",
    image: "https://placehold.co/1200?text=Counseling+%26+Therapy"
  },
  {
    id: 4,
    title: "WEB DES/DEV",
    description: "we design and develop websites that not only look stunning but also deliver seamless user experiences. Our team combines cutting-edge design with robust technology to create digital platforms that reflect your brand and achieve your goals.What We Offer: Custom Web Design: Unique, visually striking designs tailored to your brand identity.Responsive Development: Websites optimized for flawless performance across devices.E-Commerce Solutions: Scalable online stores designed to enhance customer experience and drive sales.SEO Optimization: Built-in strategies to ensure your website ranks and reaches the right audience. Maintenance & Support.",
    route: "/branding",
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
           <Video />
          
           <ScreenSixScrollPower />
       
        <ScrollComponent />
      
     
       


      </div>
  
  );
};

export default Layout;
