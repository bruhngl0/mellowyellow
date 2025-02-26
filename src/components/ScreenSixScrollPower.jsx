import React, { useState, useEffect, useRef, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useColor } from "../context/ColorContext";
import Services from "./Services";

import image1 from "../../public/mellow1.png";
import image2 from "../../public/mellow2.png";
import image3 from "../../public/mellow3.png";
import image4 from "../../public/mellow4.png";
import image5 from "../../public/mellow5.png";
import image6 from "../../public/mellow6.png";

import "../styles/ScreenSixScrollPower.scss"; // Merged SCSS file
import Fancy from "./Fancy";

import ScrollComponent from "./ScrollComponent";
import { color } from "framer-motion";


gsap.registerPlugin(ScrollTrigger);

const ANIMATION_CONFIG = {
  TRIGGER_START: "top 60%",
  TRIGGER_END: "center center",
  SCRUB_FACTOR: 1,
  INITIAL_STATE: { width: "100vw", height: "0vh", opacity: 0, scale: 1},
  FINAL_STATE: {
    width: "100vw",
    height: "100vh",
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "power3.out",
  },
};

const ScreenSixScrollPower = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { theme } = useColor();
  const nav = useNavigate();

  // Refs for GSAP animations
  const refs = {
    container: useRef(null),
    innerDiv: useRef(null),
    animatedServices: useRef(null),
    layout: useRef(null),
  };

  useEffect(() => {
    const { container, innerDiv, animatedServices, layout } = refs;

    gsap.set(innerDiv.current, ANIMATION_CONFIG.INITIAL_STATE);
    gsap.set(animatedServices.current, { opacity: 1 });
    gsap.set(layout.current, { opacity: 1 });

    const scrollTrigger = ScrollTrigger.create({
      trigger: container.current,
      start: ANIMATION_CONFIG.TRIGGER_START,
      end: ANIMATION_CONFIG.TRIGGER_END,
      scrub: ANIMATION_CONFIG.SCRUB_FACTOR,
      markers: false,
      smoothTouch: true,
    });

    const timeline = gsap.timeline({
      scrollTrigger,
      defaults: { ease: "power1.inOut" },
    });
    timeline
      .to(innerDiv.current, ANIMATION_CONFIG.FINAL_STATE)
      .to(layout.current, { opacity: 1, duration: 1 }, "-=0.5")
      .to(animatedServices.current, { opacity: 1, duration: 2 }, "-=0.5");

    return () => {
      scrollTrigger.kill();
      timeline.kill();
    };
  }, []);



  return (
    <>
   
      <section className="scrollpower">
        {/* Scroll Animation Section */}
        <div className="scrollpower-main">
          <div ref={refs.container} className="about-container-scrollpower">
            <div ref={refs.innerDiv} className="about-inner-scrollpower">
              <p
                className="scrollPower-p"
                style={{ color: theme.backgroundColor }}
              >
                SOCIAL <br/>
                DINING
              </p>
              <p className="scrollPower-mini">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                consequuntur, suscipit sint reiciendis blanditiis, atque fugiat
                corporis tempora impedit maxime odit quae? Doloremque nemo
                itaque molestiae voluptas perspiciatis veniam excepturi?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="new" style={{backgroundColor: theme.backgroundColor}}>
       <img src = "craft.png" />
      
      </section>

    

      
      
    </>
  );
};

export default memo(ScreenSixScrollPower);
