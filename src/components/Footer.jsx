import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import "../styles/footer.scss"
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <div className='footer-main'>
      <div className='footer-one'>
      </div>
      <div className='footer-two'>
        <div className='footer-two-one'>
          <h1>MELLOW YELLOW</h1>
          <div className='footer-two-one-two'>
            <p>@STUDIO MASON</p>
            <p>KSSIDC INDUSTRIAL ESTATE, 74,</p>
            <p>BOMMASANDRA</p>
            <p>BANGALORE, INDIA</p>
          </div>
          <p className='footer-followus'>FOLLOW US</p>
          <div className='footer-follow-us'>
            <FaFacebookSquare size={30} className='footer-facebook'/>
            <FaSquareInstagram size={30} className='footer-instagram'/>
          </div>
        </div>

        <div className='footer-two-two'>
          <p className='section-title'>01/ MASON</p>
          <a href="/" className='about-link'>
            <p className='section-item'>ABOUT STUDIO MASON</p>
          </a>

          <a href="/enquiry" className='about-link'>
          <p className='section-item'>CONTACT</p>
          </a>
          <a href="/bulkOrders" className='about-link'>
          <p className='section-item'>BULK ORDERS</p>
          </a>
          <a href="/buyGuide" className='about-link'>
          <p className='section-item'>BUY GUIDE</p>
          </a>
        </div>

        <div className='footer-two-three'>
          <p className='section-title'>02/ CUSTOMER SERVICE</p>
          <a href ="/bespoke" className='about-link'>
          <p className='section-item'>BESPOKE</p>
          </a>

          <a href ="/shipping-policy" className='about-link'>
          <p className='section-item'>SHIPPING POLICY</p>
          </a>

          <a href="/return-policy" className='about-link'>
          <p className='section-item'>RETURN & EXCHANGE</p>
          </a>


          <a href="/return-policy" className='about-link'>
          <p className='section-item'>TERMS OF TRADE</p>
          </a>

          <a href="/return-policy" className='about-link'>
          <p className='section-item'>PRIVACY POLICY</p>
          </a>
         
          <a href="/care-instructions" className='about-link'>
          <p className='section-item'>CARE INSTRUCTIONS</p>
          </a>
         
        </div>

        <div className='footer-two-four'>


          <p className='section-title'>03/ POPULAR NOW</p>
      

          <a href="/test-comp" className='about-link'>
          <p className='section-item'>PLANTERS</p>
          </a>

          <a href="/test-comp2" className='about-link'>
          <p className='section-item'>DESK PLANTERS</p>
          </a>

          <a href="/test-comp4" className='about-link'>
          <p className='section-item'>TABLES</p>
          </a>

         
        </div>

        <div className="footer-two-five" >
      <h1>
        REACH OUT SAVE 10% ON <br /> EVERYTHING NEW
      </h1>
      <div className='footer-icons'>
      <a 
        href="mailto:example@example.com" // Replace with your email address
        style = {{marginTop: "1rem"}}
      >
        <IoMailSharp size={40}   style = {{marginRight: "1rem"}}/>
      </a>
      
      <a 
        href="https://wa.me/+919167563398" // Replace with your email address
        style = {{marginTop: "1rem"}}
      >
        <IoLogoWhatsapp size={40} />
      </a>
      </div>

    </div>
      </div>
    </div>
  )
}

export default Footer