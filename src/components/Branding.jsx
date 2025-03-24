import React from "react";
import ImageOne from "./ImageOne";

import image1 from "../../public/br1.png";
import image2 from "../../public/br2.png";
import image3 from "../../public/br3.png";
import image4 from "../../public/br4.png";
import image5 from "../../public/br5.png";
import image6 from "../../public/br6.png";


import image7 from "../../public/br7.png";
import image8 from "../../public/br8.png";
import image9 from "../../public/br9.png";
import image10 from "../../public/br10.png";
import image11 from "../../public/br11.png";
import image12 from "../../public/br12.png";


import image13 from "../../public/br13.png";
import image14 from "../../public/br14.png";
import image15 from "../../public/br15.png";
import image16 from "../../public/br16.png";
import image17 from "../../public/br17.png";
import image18 from "../../public/br18.png";

import image19 from "../../public/br19.png";
import image20 from "../../public/br20.png";
import image21 from "../../public/br21.png";
import image22 from "../../public/br22.png";
import image23 from "../../public/br23.png";
import image24 from "../../public/br24.png";

import image25 from "../../public/br25.png";
import image26 from "../../public/br26.png";












const Branding = () => {
  const images = [image1, image2, image3, image4,];
  const images1 = [image5, image6, image7, image8,]
  const images2 = [image9, image10, image11, image12,]
  const images3 = [image13, image14, image15, image16,]
  const images4 = [image17, image18, image19, image20,]
  const images5 = [image21, image22, image23, image24]

  return (
    <div className="moto" >

        <div  className= "moto1" >
    <div className="lol1" >  
      <ImageOne images={images} />
    </div>
    <div className="lol1" >  
      <ImageOne images={images1} />
    </div>

    <div className="lol1" >  
      <ImageOne images={images2} />
    </div>
    </div>


    <div className = "moto2">
    <div className="lol1" >  
      <ImageOne images={images3} />
    </div>
    <div className="lol1" >  
      <ImageOne images={images4} />
    </div>
    <div className="lol1" >  
      <ImageOne images={images5} />
    </div>
    </div>
    </div>
  );
};

export default Branding;