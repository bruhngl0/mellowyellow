import React from "react";
import ImageOne from "./ImageOne";

import image1 from "../../public/brd1.png";
import image2 from "../../public/brd2.png";
import image3 from "../../public/brd3.png";
import image4 from "../../public/brd4.png";



















const Pr = () => {
  const images = [image1];
  const images1 = [image2]
  const images2 = [image3]
  const images3 = [image4]
  

  return (
    <div className="moto" >

        <div  className= "moto1-branding" >
    <div className="lol3" >  
      <ImageOne images={images} />
    </div>
  

   
    </div>

    <div  className= "moto2-branding" >
    <div className="lol3" >  
      <ImageOne images={images1} />
    </div>
  

   
    </div>


    <div className = "moto3-branding">
    <div className="lol3" >  
      <ImageOne images={images2} />
    </div>
   
   
    </div>

    <div className = "moto3-branding">
    <div className="lol3" >  
      <ImageOne images={images3} />
    </div>
   
   
    </div>
    </div>
  );
};

export default Pr;
