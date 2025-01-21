import React from 'react'
import Hero from './Hero'
import ScreenSix from './ScreenSix'
import Products from './Products'
import Footer from './Footer'

import "../styles/layout.scss"
const Layout = () => {
  return (
    <div className='layout-main'>
        
       <Hero />
       <ScreenSix />
       <Products />
      
       <Footer />
    </div>
  )
}

export default Layout