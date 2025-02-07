// RevealOnScroll.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import "../styles/revealonscroll.scss"

const RevealOnScroll = ({  threshold = 0.6 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: threshold,
    once: false // Change to false if you want the animation to replay when scrolling back up
  });

  const variants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1], // Custom ease curve for smooth animation
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
        <h1>At Studio Mason<br/>we craft home decor , blending durable elegance<br/> with concrete precesion.</h1>
      </motion.div>
    </section>
  );
};

// RevealOnScroll.scss


export default RevealOnScroll;