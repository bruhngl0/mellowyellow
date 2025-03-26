import React, { memo } from "react";
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
            <img src="sdasset1.png" alt="Social Dining" />
          </div>
          
          <div className="sp-right">
            <div className="sp-right-1">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="sp-right-vid"
              >
                <source src="sdn.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <p className="social-dining-text">
                Social Dining<br/>
                bring<br/> 
                strangers <br/> 
                together<br/> 
                for fun<br/> 
                activities<br/> 
                great conversations <br/>
                delicious food<br/>
                an unforgettable <br/>
                experience of<br/>
                connection<br/> 
                laughter and <br/>
                joy!!<br/> 
                we ensure <br/>
                your time <br/>
                deliver <br/>
                memories<br/> 
                you never <br/>
                forget.<br/>
              </p>
              
              <p className="label-text label-social">[ S O C I A L ]</p>
              <p className="label-text label-dining">[ D I N I N G ]</p>
            </div>
            
            <div className="sp-right-2">
              <img src="sdasset2.png" alt="Social Dining" />
            </div>
          </div>
        </div>
        
        <div className="sp-mid">
       
          <p className="scrollPower-mini"></p>
        </div>
      </section>
      
      <section className="new" style={{backgroundColor: theme.backgroundColor}}>
        <img src="craft.png" alt="Craft" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="cube-vid"
          style={{
            width: "auto",
            height: "12.5vh",
            position: "absolute",
            bottom: "5%",
            right: "2%",
            borderRadius: "10px"
          }}
        >
          <source src="small.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </>
  );
};

export default memo(ScreenSixScrollPower);
