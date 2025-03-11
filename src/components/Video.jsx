import React from 'react'
import { useColor } from '../context/ColorContext'
import { motion } from 'framer-motion'

const Video = () => {

  const {theme} = useColor()

  // Define animation variants
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

  return (
    <div className='mobile-vid'>
    <div className="video-container-screen-mid">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline // Added for better mobile support
          className="video-container-screen-mid"
        >
          <source src="video_1.mp4" type="video/mp4"  />
          Your browser does not support the video tag.
        </video>
       
      </div>


      <div className='video-list'>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.6,
                ease: [0.22, 1, 0.36, 1],
                delayChildren: 0.3,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {["BRANDING", "MARKETING", "PR ACTIVITIES", "WEB DES/DEV"].map((item, index) => (
            <motion.li
              key={index}
              variants={variants}
            >
              <a href={`/${item.toLowerCase()}`} style={{ color: "inherit", textDecoration: "none" }}>
                {item}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>


    </div>
  )
}

export default Video