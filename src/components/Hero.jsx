import React from 'react'
import Waves from './Waves'
import "../styles/hero.scss"
import Moving from './Moving'
import ScreenSix from './ScreenSix'

const Hero = () => {
  return (
    <div className='hero1-main'>
      <div className='hero1-1'>
       <div className='hero1-1-1'>MELLOW YELLOW</div>
       <div className='hero1-1-2'>
       <div className='hero1-1-2-1'></div>
       <div className='hero1-1-2-2'></div>
       </div>
    </div>



    <div className='hero1-2'>
     

    </div>
            
    <div className='hero1-3'>
      <div className='hero1-3-1'>
        <Waves />
      </div>


      <div className='hero1-3-2'>
        <div className='hero1-3-2-1'></div>
       
       
        <div className='hero1-3-2-2'>
        <div className='hero1-3-2-2-1'>
         <div className='hero1-3-2-2-1-1'></div>
         <div className='hero1-3-2-2-1-2'></div>
         
        </div>
        <div className='hero1-3-2-2-2'>
        <div className='hero1-3-2-2-2-1'></div>
        <div className='hero1-3-2-2-2-2'></div>
        </div>
        </div>
      </div>



    
    </div>        
         
            
       
     </div>
  )
}

export default Hero