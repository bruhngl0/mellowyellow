import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/fancy.scss';
import { useColor } from "../context/ColorContext";

import image1 from "../../public/image_1.jpg"
import image2 from "../../public/image_2.jpg"
import image3 from "../../public/image_3.jpg"
import image4 from "../../public/image_4.jpg"
import image5 from "../../public/image_5.jpg"
import image6 from "../../public/image_6.jpg"


const Fancy = () => {
  const { scrollY } = useScroll();
  const { theme } = useColor();
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);
  
  // Transform values for left and right sliding divs
  const leftSlide = useTransform(scrollY, [0, 2500], [0, 200]);
  const rightSlide = useTransform(scrollY, [0, 2500], [0, -200]);

  return (

    
    <div className="container-fancy">

     <h1>MANIAC</h1>

     <h3>TWINS, BORN IN UKRAINE, RAISED IN CANADA. HIGH SCHOOL DROPOUTS. TRAINED IN ITALY AND CALIFORNIA. OILSTAIN LAB IS THEIR VISION, A PURE MANIFESTATION OF ART.</h3>

        
      <div className="content-wrapper-fancy">

      <div className="overlay-image">
          <img 
            src={images[currentImage]} 
            alt={`overlay ${currentImage + 1}`} 
            key={currentImage}
          />
        </div>
        <motion.div 
          className="box-fancy box-1-fancy"
          style={{ x: leftSlide }}
        >
         
          <h1 style = {{"color": theme.backgroundColor}}>MELLOW*MELLOW*MELLOW*MELLOW*MELLOW*MELLOW*MELLOW*MELLOW*MELLOW*MELLOW*MELLOW*MELLOW*MELLOW*MELLOW*MELLOW*MELLOW</h1>
        </motion.div>

        <motion.div className="box-fancy box-2-fancy"
        style = {{ x : rightSlide}} >
         
         <h1 style = {{"color": theme.backgroundColor}}>*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW</h1>
        </motion.div>
        
        <motion.div 
          className="box-fancy box-3-fancy"
          style={{ x: leftSlide }}
        >
        
        <h1 style = {{"color": theme.backgroundColor}}>MLLW*MLLW*MLLW*MLLW*MLLW*MLLW*MLLW*MLLW*MLLW*MLLW*MLLW*MLLW*MLLW*MLLW*MLLW*MLLW</h1>
        </motion.div>
        
        <motion.div className="box-fancy box-4-fancy"
         style={{ x: rightSlide }}>
          
          <h1 style = {{"color": theme.backgroundColor}}>*YLLW*YLLW*YLLW*YLLW*YLLW*YLLW*YLLW*YLLW*YLLW*YLLW*YLLW*YLLW*YLLW*YLLW*YLLW*YLLW</h1>
        </motion.div>

        <motion.div className="box-fancy box-4-fancy"
         style={{ x: leftSlide }}>
          
          <h1 style = {{"color": theme.backgroundColor}}>MELLOW*MELLOW*MELLOW*MELLOW*MELLOW*MELLOW*MELLOW*MELLOW*MELLOW*MELLOW*MELLOW*MELLOW*MELLOW*MELLOW*MELLOW*MELLOW</h1>
        </motion.div>

        <motion.div className="box-fancy box-4-fancy"
         style={{ x: rightSlide }}>
          
          <h1 style = {{"color": theme.backgroundColor}}>*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW*YELLOW</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Fancy;