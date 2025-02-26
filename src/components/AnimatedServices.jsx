
import React, { useEffect, useState } from 'react';
import "../styles/ani.scss"
import { useColor } from '../context/ColorContext';
import { color } from 'framer-motion';


const AnimatedServices= () => {
  const { theme } = useColor();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
 
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 7); // Rotate through 3 images
        setIsPaused(true); // Pause after moving to the next image
      } else {
        setIsPaused(false); // Resume after the pause
      }
    }, isPaused ? 2000 : 1000); // Slide every 2 seconds, pause for 1 second
 
    return () => clearInterval(interval);
  }, [isPaused]);
 
  return (
    <div className='main-layout-ani'>
   
    <div className='layout-two-ani'>
 
      <div className={`image-container-two-ani ani-image-${currentImageIndex}`} style={{ color: theme.primaryColor }} > 
      <p>BRANDING</p>
      <p>INNOVATE</p>
      <p>CUSTOMIZE</p>
      <p>CREATE</p>
      <p>DEPLOY</p>
      <p>MAGIC!</p>
      </div>
    </div>
    </div>
  );
};

export default AnimatedServices;