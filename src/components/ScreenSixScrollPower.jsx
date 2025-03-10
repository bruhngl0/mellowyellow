import React, {  memo } from "react";

import { useColor } from "../context/ColorContext";

import "../styles/ScreenSixScrollPower.scss"; // Merged SCSS file






const ScreenSixScrollPower = () => {

  const { theme } = useColor();


  



  return (
    <>
   
      <section className="scrollpower">
        {/* Scroll Animation Section */}
       
         


            <div className="sp-main">
            <div className="sp-left">
              <img src = "sdasset1.png" />
            </div>
            
            <div className="sp-right">
              <div className="sp-right-1">
              <video
                autoPlay
                loop
                muted
                playsInline // Added for better mobile support
                className="sp-right-vid"
                
              >
            <source src="sdn.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <p style={{color: "black", fontSize: "13px" , height: "100%", margin: "0" ,  }}> Social Dining<br/>bring<br/> strangers <br/> together<br/> for fun<br/> activities<br/> great conversations <br/>delicious food<br/>an unforgettable <br/>experience of<br/>connection<br/> laughter and <br/>joy!!<br/> we ensure <br/>your time <br/>deliver <br/>memories<br/> you never <br/>forget.<br/>
            </p>

           <p style={{color: "black", rotate: "90deg" , fontSize: "18px", position: "absolute", top: "6.1%", right: "0%", rotate: "90deg" }}>[ S O C I A L ]  </p>

           <p style={{color: "black", rotate: "90deg" , fontSize: "18px", position: "absolute", top: "67.1%", right: "0%", rotate: "90deg" }}>[ D I N I N G ]  </p>
              </div>
              <div className="sp-right-2">
                <img src = "sdasset2.png" />
               
             
              </div>
            </div>
            </div>
            <div className="sp-mid">
              <p
                className="scrollPower-p"
                style={{ color: theme.backgroundColor }}
              >
               
              </p>
              <p className="scrollPower-mini">
             
              </p>
            </div>


      </section>
      <section className="new" style={{backgroundColor: theme.backgroundColor}}>
       <img src = "craft.png" />
       <video
          autoPlay
          loop
          muted
          playsInline // Added for better mobile support
          className="cube-vid"
          style={{width: "auto" , height: "12.5vh", position: "absolute", bottom: "5%",right: "2%", borderRadius: "10px"}}
        >
          <source src="small.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      
      </section>

    

      
      
    </>
  );
};

export default memo(ScreenSixScrollPower);
