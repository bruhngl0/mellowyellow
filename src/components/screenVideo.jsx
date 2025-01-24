import React, { useState, useEffect } from 'react';
import '../styles/screenVideo.scss';
import Header from './Header';

const ScreenVideo = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [videoSrc, setVideoSrc] = useState('watch.mp4');

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        setVideoSrc('studio.mp4'); // Your mobile video filename
      } else {
        setIsMobile(false);
        setVideoSrc('studio.mp4');
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    
      <div className="video-container-screen">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline // Added for better mobile support
          className="video-bg-screen"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       
      </div>
    </>
  );
};

export default ScreenVideo;