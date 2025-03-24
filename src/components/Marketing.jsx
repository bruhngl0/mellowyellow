import React from "react";
import ImageOne from "./ImageOne";

import image1 from "../../public/grid1-md.jpeg";
import image2 from "../../public/grid2-md.jpeg";
import image3 from "../../public/grid3-md.jpeg";
import image4 from "../../public/grid4-md.jpeg";
import image5 from "../../public/grid6-md.jpeg";
import image6 from "../../public/grid7-md.jpeg";


import image7 from "../../public/grid8-md.jpeg";
import image8 from "../../public/grid9-md.jpeg";
import image9 from "../../public/grid10-md.jpeg";
import image10 from "../../public/grid11-md.jpeg";
import image11 from "../../public/grid12-md.jpeg";
import image12 from "../../public/grid13-md.jpeg";















const Marketing = () => {
  const images = [image1, image2];
  const images1 = [image3, image4]
  const images2 = [image5, image6]
  const images3 = [image7, image8]
  const images4 = [image9, image10]
  const images5 = [image11, image12]

  return (
    <div className="moto" >

        <div  className= "moto1-branding" >
    <div className="lol2" >  
      <ImageOne images={images} />
    </div>
    <div className="lol2" >  
      <ImageOne images={images3} />
    </div>

   
    </div>

    <div  className= "moto2-branding" >
    <div className="lol2" >  
      <ImageOne images={images2} />
    </div>
    <div className="lol2" >  
      <ImageOne images={images1} />
    </div>

   
    </div>


    <div className = "moto3-branding">
    <div className="lol2" >  
      <ImageOne images={images4} />
    </div>
    <div className="lol2" >  
      <ImageOne images={images5} />
    </div>
   
    </div>
    </div>
  );
};

export default Marketing;
