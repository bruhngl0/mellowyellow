import React from 'react'
import { motion } from 'framer-motion'
import Fancy from './Fancy'
import '../styles/dual.scss'

const Dual = () => {
  // Define animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <div className='dual-main'>
        <motion.div className='dual-left' variants={variants} initial="hidden" whileInView="visible">
            <img src="candle.jpg" alt="Candle" />
        </motion.div>
        <motion.div className='dual-right' variants={variants} initial="hidden" whileInView="visible">
            <Fancy />
        </motion.div>
    </div>
  )
}

export default Dual