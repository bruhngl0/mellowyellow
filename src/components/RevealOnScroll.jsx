// RevealOnScroll.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import "../styles/revealonscroll.scss";
import { useColor } from "../context/ColorContext";


const RevealOnScroll = ({ props, threshold = 0.6 }) => {

   const { theme } = useColor();
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: threshold,
    once: false // set to true if you want the animation to trigger only once
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1]
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
        <h1 style={{color: theme.backgroundColor}}>{props}</h1>
      </motion.div>
    </section>
  );
};

export default RevealOnScroll;