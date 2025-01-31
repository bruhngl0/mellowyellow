import React from 'react'
import Waves from './Waves'
import "../styles/hero.scss"
import Moving from './Moving'
import ScreenSix from './ScreenSix'
import ScreenVideo from './screenVideo'
import AnimatedServices from './AnimatedServices'
import Test from './Test'

const Hero = () => {
  return (
    <div className='hero1-main'>
      <div className='hero1-1'>
       <div className='hero1-1-1'>
       <p> MELLOW&nbsp;&nbsp;YELLOW</p>
        </div>
       <div className='hero1-1-2'>
       <div className='hero1-1-2-1'>
        <ul>
          <li>◉ SEASONS </li>
          <li>◉ DESIGNS </li>
          <li>◉ TYPOGRAPHY </li>
        </ul>
       </div>
       <div className='hero1-1-2-2'>
        <Moving />
       </div>
       </div>
    </div>



    
            
    <div className='hero1-3'>
      <div className='hero1-3-1'>
        <div className='test-container'>
    
        </div>
        <Test />
      </div>


      <div className='hero1-3-2'>
        <div className='hero1-3-2-1'>
     
    

     <AnimatedServices />
  
     
  
        </div>
       
      
        <div className='hero1-3-2-2'>
          <ScreenVideo />
        </div>
      </div>



    
    </div>        
         
    <div className='hero1-2'>
  
   
    </div>
       
     </div>
  )
}

export default Hero