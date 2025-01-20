import React from 'react'
import Waves from './Waves'
import "../styles/hero.scss"
import Moving from './Moving'
import ScreenSix from './ScreenSix'

const Hero = () => {
  return (
    <div className='hero1-main'>
        <div className='hero1-one'>
            <h1 className='hero1-mellow'>MELLOW YELLOW</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto repellat ipsam minus illo. Iusto perferendis quisquam vel repudiandae, tenetur nulla in, iste laudantium eveniet odit delectus. Repudiandae, tenetur! Consectetur, fuga.</p>
           
            <Waves />
        </div>
        <div className='hero1-two'>
            <div className='hero1-two-one'>
                <div className='hero1-two-one-one'>
                   <ul>
                    <li>🔘 SEASONS</li>
                    <li>🔘 DESIGNS</li>
                    <li>🔘 TYPOGRAPHY</li>

                   </ul>
                </div>
                <div className='hero1-two-one-two'>
                  <Moving />
                </div>
            </div>

            <div className='hero1-3'>

             
            
              <p className='hero1-3-head'></p>

              <p className='hero1-3-grid1'> GRID-ELEMENTS (1</p>
              <p className='hero1-3-grid2'> FLEX-ELEMENTS (2</p>
          

            <video 
            className='hero1-3-video' 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto" 
            title="Photography Series" // Video title
          >
          <source src= "watch.mp4" type="video/mp4" className='proj-img'/>
            Your browser does not support the video tag.
          </video>
            </div>
        </div>
    </div>
  )
}

export default Hero