import React, { useEffect, useState, useRef } from "react";
import "../styles/ScrollComponent.scss";
import { useColor } from "../context/ColorContext";
// Thumbnail Images (640x800)
import thumbnail_1 from "../assets/ScrollComponent/thumbnail-1.jpg";
import thumbnail_2 from "../assets/ScrollComponent/thumbnail-2.jpg";
import thumbnail_3 from "../assets/ScrollComponent/thumbnail-3.jpg";
import thumbnail_4 from "../assets/ScrollComponent/thumbnail-4.jpg";
import thumbnail_5 from "../assets/ScrollComponent/thumbnail-5.jpg";
import thumbnail_6 from "../assets/ScrollComponent/thumbnail-6.jpg";
import content_1 from "../assets/ScrollComponent/content-1.jpg";
import content_2 from "../assets/ScrollComponent/content-2.jpg";
import content_3 from "../assets/ScrollComponent/content-3.jpg";
import content_4 from "../assets/ScrollComponent/content-4.jpg";
import content_5 from "../assets/ScrollComponent/content-5.jpg";
import content_6 from "../assets/ScrollComponent/content-6.jpg";
import { color } from "framer-motion";

const data = [
  {
    id: 1,
    thumbnail: thumbnail_1,
    title: "Title1",
    description: "Description1",
    content: content_1,
  },
  {
    id: 2,
    thumbnail: thumbnail_2,
    title: "Title2",
    description: "Description2",
    content: content_2,
  },
  {
    id: 3,
    thumbnail: thumbnail_3,
    title: "Title3",
    description: "Description3",
    content: content_3,
  },
  {
    id: 4,
    thumbnail: thumbnail_4,
    title: "Title4",
    description: "Description4",
    content: content_4,
  },
  {
    id: 5,
    thumbnail: thumbnail_5,
    title: "Title5",
    description: "Description5",
    content: content_5,
  },
  {
    id: 6,
    thumbnail: thumbnail_6,
    title: "Title6",
    description: "Description6",
    content: content_6,
  },

  {
    id: 7,
    thumbnail: thumbnail_4,
    title: "Title4",
    description: "Description4",
    content: content_4,
  },
  {
    id: 8,
    thumbnail: thumbnail_5,
    title: "Title5",
    description: "Description5",
    content: content_5,
  },
  {
    id: 9,
    thumbnail: thumbnail_6,
    title: "Title6",
    description: "Description6",
    content: content_6,
  },
];

const ScrollComponent = () => {

  const { theme } = useColor();
  const [selectedItem, setSelectedItem] = useState(data[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  
  const ITEM_HEIGHT = 210; // 200px height + 10px margin
  const TRIGGER_POINT = 400; // Invisible trigger point

  const doubleData = [...data, ...data];

  useEffect(() => {
    let intervalId;

    if (isAnimating) {
      intervalId = setInterval(() => {
        setCurrentPosition(prev => {
          const totalItems = data.length;
          const nextPosition = prev + ITEM_HEIGHT;
          
          if (nextPosition >= totalItems * ITEM_HEIGHT) {
            return 0;
          }
          return nextPosition;
        });
      }, 2000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAnimating]);

  useEffect(() => {
    const triggerIndex = Math.floor(currentPosition / ITEM_HEIGHT);
    const actualIndex = triggerIndex % data.length;
    
    setSelectedItem(data[actualIndex]);
    setActiveIndex(actualIndex);
  }, [currentPosition]);

  const handleMouseEnter = (item, index) => {
    setIsAnimating(false);
    setSelectedItem(item);
    setActiveIndex(index % data.length);
  };

  const handleMouseLeave = () => {
    setIsAnimating(true);
  };

  return (
    <div className="container-scroll">
      <div 
        className="left-section-scroll" 
        onMouseLeave={handleMouseLeave}
      >
        <div className="inner-container-scroll">
          <div 
            className="scroll-content"
            style={{
              transform: `translateY(-${currentPosition}px)`,
              transition: 'transform 0.5s ease-in-out'
            }}
          >
            {doubleData.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className={`thumbnail-scroll ${index % data.length === activeIndex ? "active" : ""}`}
                onMouseEnter={() => handleMouseEnter(item, index)}
              >
                <img src={item.thumbnail} alt={item.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="right-section-scroll">
        <div className="right-section-top-scroll">
          <p style={{color: theme.backgroundColor}}>{selectedItem.title}</p>
          <p style={{color: theme.backgroundColor}}>{selectedItem.description}</p>
          <p style={{color: theme.backgroundColor}}>Globally recognized Independent Designer and Creative Director
based in the Netherlands. Working at the intersection of design, art,
and photography with a host of international clients that includes
Getty Institute, Adobe, Meta, Adidas, Bill Gates Ventures, VanMoof,
Lexus, Toyota, Samsung, ECCO, and more.<br/><br/><br/><br/><br/>mellowyellow@gmail.com</p>

      <p style={{color: theme.backgroundColor}}>IST:2:30pm</p>

        </div>
        <div className="right-section-bottom-scroll">
          <img
            src={selectedItem.content}
            alt={selectedItem.title}
            className="content-image-scroll"
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollComponent;