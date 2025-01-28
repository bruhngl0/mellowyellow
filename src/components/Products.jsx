import React, { useState} from 'react';


import ImageAni from './ImageAni';


import '../styles/products.scss';


import image1 from "../../public/blue.png"
import image2 from "../../public/blue.png"
import image3 from "../../public/blue.png"
import image4 from "../../public/blue.png"
import image5 from "../../public/blue.png"
import image6 from "../../public/blue.png"



const Products = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [productDataSelect, setProductDataSelect] = useState(null)






  //Product Data

  const productData = [
    {
      id: "product-1",
      image:  image1,
      name: "Love Pot",
      description: "A beautiful pot to show your love and affection.",
      price: "$39.99",
      features: ["Feature one description", "Feature two description", "Feature three description"],
      specifications: {
        width: "20 x 30 cm",
        length: "500g",
        height: "Premium Quality"
      }
    },
    {
      id: "product-2",
      image: image2,
      name: "COFFEE TABLE",
      description: "This sleek concrete coffee table is durable, fiberglass-reinforced, and available in multiple colors. Water, moss, and stain-resistant, it’s easy to maintain and perfect for any indoor or outdoor space.",
      price: "$29.99",
      features: ["FROST-RESISTANCE", "UV-RESISTANCE", "OUTDOOR-READY"],
      specifications: {
        dimension: "Height 1ft 6inch",
        weight: "3kg",
        material: "MS, SS, WOOD"
      }
    },

    {
      id: "product-3",
      image: image3,
      name: "Scroll Pot",
      description: "A modern pot with a classic scroll design.",
      price: "$29.99",
      features: ["Feature A description", "Feature B description", "Feature C description"],
      specifications: {
        dimension: "15 x 20 cm",
        weight: "300g",
        material: "Ceramic"
      }
    },

    {
      id: "product-4",
      image: image4,
      name: "Scroll Pot",
      description: "A modern pot with a classic scroll design.",
      price: "$29.99",
      features: ["Feature A description", "Feature B description", "Feature C description"],
      specifications: {
        dimension: "15 x 20 cm",
        weight: "300g",
        material: "Ceramic"
      }
    },

    {
      id: "product-5",
      image: image5,
      name: "Scroll Pot",
      description: "A modern pot with a classic scroll design.",
      price: "$29.99",
      features: ["Feature A description", "Feature B description", "Feature C description"],
      specifications: {
        dimension: "15 x 20 cm",
        weight: "300g",
        material: "Ceramic"
      }
    },

    {
      id: "product-6",
      image: image6,
      name: "Scroll Pot",
      description: "A modern pot with a classic scroll design.",
      price: "$29.99",
      features: ["Feature A description", "Feature B description", "Feature C description"],
      specifications: {
        dimension: "15 x 20 cm",
        weight: "300g",
        material: "Ceramic"
      }
    },
    // Add more products here...
  ];
  

  const handleImageClick = (productId) => {
    const selectedProduct = productData.find((product => product.id === productId))
    console.log(selectedProduct)
    setSelectedId(selectedProduct.id);
    setSelectedImage(selectedProduct.image);
    setProductDataSelect(selectedProduct)
    
  };

  const handleClose = () => {
    setSelectedImage(null);
    setSelectedId(null);
    setProductDataSelect(null)
   
  };

  return (
    <div className="products-container">
    

          <div className="sticky-container">
            <section className="sticky-section">
              <div className="content">
                <ImageAni />
              </div>
            </section>

            <section className="scroll-section">
              <div className="scroll-item">
              
                <div className='image-container-love'>
                <div 
                  className="image-container-scroll"
                  layoutId="product-1"
                  onClick={() => handleImageClick( "product-5")}
                >
                  <img 
                    src={image5}
                    alt="Product" 
                    className="scroll-image"
                  />

             
                </div>

                <div 
                  className="image-container-scroll"
                  layoutId="product-2"
                  onClick={() => handleImageClick( "product-2")}
                >
                  <img 
                    src= {image2}
                    alt="Product" 
                    className="scroll-image"
                  />

             
                </div>
                </div>


                
                
              </div>
              <div className="scroll-item-two">

              <div className='image-container-love'>
                <div 
                  className="image-container-scroll"
                  layoutId="product-3"
                  onClick={() => handleImageClick( "product-6")}
                >
                  <img 
                    src= {image6}
                    alt="Product" 
                    className="scroll-image"
                  />

             
                </div>

                <div 
                  className="image-container-scroll"
                  layoutId="product-4"
                  onClick={() => handleImageClick( "product-4")}
                >
                  <img 
                    src= {image4} 
                    alt="Product" 
                    className="scroll-image"
                  />

             
                </div>
                </div>
                
              </div>

              <div className="scroll-item-three">

              <div className='image-container-love'>
                <div 
                  className="image-container-scroll"
                  layoutId="product-5"
                  onClick={() => handleImageClick( "product-1")}
                >
                  <img 
                    src= {image1}
                    alt="Product" 
                    className="scroll-image"
                  />

             
                </div>

                <div 
                  className="image-container-scroll"
                  layoutId="product-6"
                  onClick={() => handleImageClick( "product-3")}
                >
                  <img 
                    src= {image3} 
                    alt="Product" 
                    className="scroll-image"
                  />

             
                </div>
                </div>
                
              </div>
          
            </section>
          </div>
      
  
    </div>
  );
};

export default Products;