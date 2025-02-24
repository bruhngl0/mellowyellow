import React, { useEffect, useState, useRef } from "react";
import "../styles/ScrollComponent.scss";
import { useColor } from "../context/ColorContext";
import { motion, useInView, useAnimation } from "framer-motion";
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
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollRef = useRef(null);
  const controls = useAnimation();
  
  const ITEM_HEIGHT = 210;
  const doubleData = [...data, ...data];

  // Check if element is in view
  const isInView = useInView(scrollRef, {
    margin: "-100px 0px", // Adjust trigger margin as needed
    once: false // Allow re-triggering when scrolling back into view
  });

  useEffect(() => {
    let intervalId;

    // Start animation only when in view
    if (isInView && isAnimating) {
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
  }, [isInView, isAnimating]);

  // Start animation when component comes into view
  useEffect(() => {
    if (isInView) {
      setIsAnimating(true);
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
      });
    } else {
      setIsAnimating(false);
      controls.start({
        opacity: 0,
        y: 0,
        transition: { duration: 0.5 }
      });
    }
  }, [isInView, controls]);

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
    if (isInView) {
      setIsAnimating(true);
    }
  };

  return (
    <div className="container-scroll">
      <div 
        className="left-section-scroll" 
        onMouseLeave={handleMouseLeave}
        ref={scrollRef}
      >
        <motion.div 
          className="inner-container-scroll"
          initial={{ opacity: 1, y: 50 }}
          animate={controls}
        >
          <motion.div 
            className="scroll-content"
            style={{
              transform: `translateY(-${currentPosition}px)`,
              transition: 'transform 0.5s ease-in-out'
            }}
          >
            {doubleData.map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                className={`thumbnail-scroll ${index % data.length === activeIndex ? "active" : ""}`}
                onMouseEnter={() => handleMouseEnter(item, index)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img src={item.thumbnail} alt={item.title} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="right-section-scroll">
        <motion.div 
          className="right-section-top-scroll"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p style={{color: theme.backgroundColor}}>{selectedItem.title}</p>
          <p style={{color: theme.backgroundColor}}>{selectedItem.description}</p>
          <p style={{color: theme.backgroundColor}}>
            Globally recognized Independent Designer and Creative Director
            based in the Netherlands. Working at the intersection of design, art,
            and photography with a host of international clients that includes
            Getty Institute, Adobe, Meta, Adidas, Bill Gates Ventures, VanMoof,
            Lexus, Toyota, Samsung, ECCO, and more.
            <br/><br/><br/><br/><br/>
            mellowyellow@gmail.com
          </p>
          <p style={{color: theme.backgroundColor}}>IST:2:30pm</p>
        </motion.div>
        <motion.div 
          className="right-section-bottom-scroll"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={selectedItem.content}
            alt={selectedItem.title}
            className="content-image-scroll"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollComponent;