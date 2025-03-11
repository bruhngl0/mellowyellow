import React from 'react'
import "../styles/heroVideo.scss"

const HeroVideo = () => {
  return (
    <div className='hero-video'>
         <video 
          autoPlay 
          loop 
          muted 
          playsInline // Added for better mobile support
          className="video-bg-screen"
        >
          <source src="small.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
  )
}

export default HeroVideo