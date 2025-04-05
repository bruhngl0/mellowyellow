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
          <source src="video_1.mp4" type="video/mp4" />
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
          {[
            { label: "WORKS", href: "/branding" },
            { label: "MARKETING", href: "/marketing" },
            { label: "BRANDING", href: "/pr" },
            { label: "PR ACTIVITIES", href: "/web" },
            { label: "PRODUCTION", href: "/production" }
          ].map((item, index) => (
            <motion.li key={index} variants={variants}>
              <a href={item.href} style={{ color: "inherit", textDecoration: "none", display: "block" }}>
                {item.label}
              </a>
            </motion.li>             
          ))}
        </motion.ul>
      </div>
    </div>
  )
}

export default Video
