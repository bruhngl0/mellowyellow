import React from 'react'
import "../styles/web.scss"

const Web = () => {
  return (
    <div className='web'>
        <div className="video-container-web">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline // Added for better mobile support
          className="video-container-web"
        >
          <source src="web.mp4" type="video/mp4"  />
          Your browser does not support the video tag.
        </video>
       
      </div>

      <p className='para-web'>
      Your website is often the first impression of your brand — make it unforgettable. We craft visually striking, responsive websites that blend creativity with functionality. Whether you're launching a new brand or refreshing an old one, our web design and development services are tailored to engage your audience and drive real results across all devices.
      </p>

      <p className='para-web'>
      We don’t just build websites — we create digital experiences that tell your brand’s story with impact. From custom UI/UX design to clean, high-performance code, our team ensures every interaction feels intuitive and inspiring. Whether it’s a bold portfolio or a robust e-commerce site, we turn your vision into a powerful online presence.
      </p>
    </div>
  )
}

export default Web