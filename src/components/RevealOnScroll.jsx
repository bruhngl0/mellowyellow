import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import "../styles/revealonscroll.scss";
import { useColor } from "../context/ColorContext";
import Hover from './Hover';

const RevealOnScroll = ({ props, threshold = 0.3 }) => {
  const { theme } = useColor();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once: true // set to true if you want the animation to trigger only once
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
        delayChildren: 1,
        staggerChildren: 0.2,
      }
    }
  };

  return (
    <section className="reveal-wrapper" ref={ref}>
      <motion.div
        className="reveal-content"
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className='inner-div-ros'>
        <h1 style={{ color: theme.backgroundColor }}>
    {props || "Default Title"} {/* Added fallback to prevent crashes */}
    
    {/* Video Section */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="video-small-screen"
    
    >
      <source src="/hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </h1>
        
        </div>

      </motion.div>
      
      <motion.div 
        className="video-container-screen" 
        style={{display: "flex", marginTop: "4rem"}}
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <video
          autoPlay
          loop
          muted
          playsInline // Added for better mobile support
          className="video-tv-screen"
         
        >
          <source src="tvCropped.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <motion.div 
          className='ros' 
       
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          
        >
          <p>We transform your social media presence into a powerful platform for connection and growth. Our approach is to combine creativity, strategy, and analytics to ensure, your brand stands out in the digital crowd.</p>
          
          <motion.ul 
            style={{
              display: "flex", 
              flexDirection: "column", 
              marginLeft: "1rem"
            }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.6,
                  ease: [0.22, 1, 0.36, 1],
                  delayChildren: 1.5,
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {[
              "Content Planning & Scheduling: A well-curated, consistent feed that reflects your brand identity.",
              "Engagement & Community Building: Meaningful interactions that build trust and loyalty.",
              "Performance Analytics: Insights to optimize your strategy and drive measurable results."
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1.6,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }
                }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RevealOnScroll;