import React, { useState, useEffect } from 'react';
import "../styles/headers.scss"
import FloatingDock from './FloatingDock';
import { useColor } from "../context/ColorContext";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useColor();

  const menuItems = [
    { name: 'Gallery', link: '/gallery' },
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Contact', link: '/contact' },
    
  ];

  const handleButtonClick = (event) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);
    if (isMenuOpen) {
      document.addEventListener('click', closeMenu);
    }
    return () => document.removeEventListener('click', closeMenu);
  }, [isMenuOpen]);

  return (
    <div className='header' style={{backgroundColor: theme.backgroundColor}}>
      {<h1 className='left-head' onClick={handleButtonClick}>❒❒❒</h1>}
      <img src = "" className='iris'/>
      <div className={`slide-menu ${isMenuOpen ? 'open' : ''}`}>
      <div className='footer-top'>
        <div style={{}}>
          <span style={{fontSize: "20px", marginBottom: "1px solid black"}}>❒❒❒</span>
        </div>
      
      <div className='large-group-top'>
        <span style={{color: "black"}}><a href="/">Home</a></span>
        <span style={{color: "black"}}><a href="/clients">Clients</a></span>
        <span ><a href= "/branding" style= {{fontSize: "24px" , color: "black", fontWeight: "200", paddingTop:"3px", paddingBottom: "3px", letterSpacing: "-0.04em"}}>Works: (featured)</a></span>
        <span><a href="/marketing" style= {{fontSize: "24px" , color: "black", fontWeight: "200", paddingTop:"3px", paddingBottom: "3px", letterSpacing: "-0.04em"}}>Branding (SMM)</a></span>
        <span><a href="/web" style= {{fontSize: "24px" , color: "black", fontWeight: "200", paddingTop:"3px", paddingBottom: "3px", letterSpacing: "-0.04em"}}>Web Des/Dev</a></span>
        <span style= {{fontSize: "40px", color: "gray", fontWeight: "200",  paddingTop:"3px", paddingBottom: "3px"}}> Themes<br/><FloatingDock /></span>
        
      </div>

      <div className='small-group-top'>
      <span>
  <a
    href="https://www.instagram.com/socialdining.in/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      fontSize: "20px",
      color: "black",
      fontWeight: "200",
      paddingTop: "3px",
      paddingBottom: "3px",
      letterSpacing: "-0.04em",
    }}
  >
    Social Dining
  </a>
</span>
       
        <span>
  <a
    href="https://www.instagram.com/mellowyellowstudio/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      fontSize: "20px",
      color: "black",
      fontWeight: "200",
      paddingTop: "3px",
      paddingBottom: "3px",
      letterSpacing: "-0.04em",
    }}
  >
    Instagram
  </a>
</span>

<span>
  <a
    href="mailto:veeralijain09@gmail.com"
    style={{
      fontSize: "20px",
      color: "black",
      fontWeight: "200",
      paddingTop: "3px",
      paddingBottom: "3px",
      letterSpacing: "-0.04em",
    }}
  >
    Gmail (SMM)
  </a>
</span>

<span>
  <a
    href="https://wa.me/+917760618621?text=Hi%2C%20I'm%20interested%20in%20your%20services"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      fontSize: "20px",
      color: "black",
      fontWeight: "200",
      paddingTop: "3px",
      paddingBottom: "3px",
      letterSpacing: "-0.04em",
    }}
  >
    WhatsApp
  </a>
</span>

       
        
      </div>

      <div className='policy-top'>Privacy Policy and legal terms</div>
      
      
      </div>
      </div>
      
      <h1 className='right-head'>MELLOW YELLOW</h1>
    </div>
  );
};

export default React.memo(Header);