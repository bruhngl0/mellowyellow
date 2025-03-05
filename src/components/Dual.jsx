import React from 'react'
import Fancy from './Fancy'
import '../styles/dual.scss'

const Dual = () => {
  return (
    <div className='dual-main'>
        <div className='dual-left'>
           
            <img src  = "candle.jpg" />
        </div>
        <div className='dual-right'>
            <Fancy />
           
        </div>

    </div>
  )
}

export default Dual