import React from 'react'
import { motion } from 'framer-motion'
import "../styles/serviceshowcase.scss"


const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

const ServiceShowcase = () => {
  return (
    <div className='ss-main0'>
       
    <div className="ss-main1">
    <video 
      autoPlay 
      loop 
      muted 
      playsInline // Added for better mobile support
      className="ss-video"
    >
      <source src="video_1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>

   



 
   
  </div>
  )
}

export default ServiceShowcase