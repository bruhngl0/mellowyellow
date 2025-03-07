import React, { useState, useEffect, useRef, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useColor } from "../context/ColorContext";
import Services from "./Services";



import "../styles/ScreenSixScrollPower.scss"; // Merged SCSS file



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


            <div className="sp-main">
            <div className="sp-left">
              <img src = "sdasset1.png" />
            </div>
            
            <div className="sp-right">
              <div className="sp-right-1">
              <video
                autoPlay
                loop
                muted
                playsInline // Added for better mobile support
                className="cube-vid"
                style={{width: "auto" , height: "35.5vh",  }}
              >
            <source src="sdn.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <p style={{color: "black", fontSize: "13px", paddingLeft: "1rem"}}> We understand that your website is more than just a digital presence—it’s a reflection of your brand. From intuitive navigation to stunning visuals, we ensure your site not only stands out but also delivers measurable results.
            </p>
              </div>
              <div className="sp-right-2">
                <img src = "sdasset2.png" />
               
             
              </div>
            </div>
            </div>
            <div className="sp-mid">
              <p
                className="scrollPower-p"
                style={{ color: theme.backgroundColor }}
              >
               
              </p>
              <p className="scrollPower-mini">
             
              </p>
            </div>













            
              
             
            </div>
          </div>
        </div>
      </section>
      <section className="new" style={{backgroundColor: theme.backgroundColor}}>
       <img src = "craft.png" />
       <video
          autoPlay
          loop
          muted
          playsInline // Added for better mobile support
          className="cube-vid"
          style={{width: "auto" , height: "12.5vh", position: "absolute", bottom: "5%",right: "2%"}}
        >
          <source src="cube.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      
      </section>

    

      
      
    </>
  );
};

export default memo(ScreenSixScrollPower);
