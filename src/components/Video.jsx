import React from 'react'

const Video = () => {
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
        <ul>
           <li>BRANDING</li> 
            <li>MARKETING</li>
            <li>PR ACTIVITIES</li>
            <li>WEB DES/DEV</li>
        </ul>
      </div>


    </div>
  )
}

export default Video