import React, { useEffect, useState, useCallback, memo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import '../styles/fancy.scss';
import { useColor } from "../context/ColorContext";

import image1 from "../../public/image_1.jpg";
import image2 from "../../public/image_2.jpg";
import image3 from "../../public/image_3.jpg";
import image4 from "../../public/image_4.jpg";
import image5 from "../../public/image_5.jpg";
import image6 from "../../public/image_6.jpg";

// Memoized text component to prevent unnecessary rerenders
const ScrollingText = memo(({ direction, color }) => {
  const { scrollY } = useScroll();
  const slide = useTransform(
    scrollY, 
    [0, 500, 4500], // Added a middle point for smoother animation
    [0, 0, direction === 'left' ? 100 : -200] // Starts at 0, stays at 0 briefly, then moves
  );

  return (
    <motion.div 
      className={`box-fancy box-${direction}-fancy`} 
      style={{ 
        x: slide,
        translateX: direction === 'left' ? '-20%' : '0%' // Ensures initial centered position
      }}
    >
      <h1 style={{ color }}>
        {direction === 'left' ? 'MELLOW*MELLOW*MELLOW' : '*YELLOW*YELLOW*YELLOW*'}
      </h1>
    </motion.div>
  );
});

const ImageTransition = memo(({ src, alt }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1}}
      transition={{ duration: 1, ease: "easeIn" }}
    />
  );
});

const Fancy = () => {
  const { theme } = useColor();
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2, image3, image4, image5, image6];

  const updateImage = useCallback(() => {
    setCurrentImage(prev => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(updateImage, 1000);
    return () => clearInterval(interval);
  }, [updateImage]);

  return (
    <div className="container-fancy">
      <motion.h1 
        className="title-fancy"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        MANIAC
      </motion.h1>

      <motion.h3 
        className="description-fancy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        TWINS, BORN IN UKRAINE, RAISED IN CANADA. HIGH SCHOOL DROPOUTS. 
        TRAINED IN ITALY AND CALIFORNIA. OILSTAIN LAB IS THEIR VISION, 
        A PURE MANIFESTATION OF ART.
      </motion.h3>

      <div className="content-wrapper-fancy">
        <div className="overlay-image">
          <AnimatePresence mode="wait">
            <ImageTransition
              key={currentImage}
              src={images[currentImage]}
              alt={`overlay ${currentImage + 1}`}
            />
          </AnimatePresence>
        </div>

        {[...Array(3)].map((_, index) => (
          <React.Fragment key={index}>
            <ScrollingText direction="left" color={theme.backgroundColor} />
            <ScrollingText direction="right" color={theme.backgroundColor} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default memo(Fancy);