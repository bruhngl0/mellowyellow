import React, { useEffect, useState, useRef,memo, useCallback } from "react";
import "../styles/ScrollComponent.scss";
import { useColor } from "../context/ColorContext";
import { motion, useInView, useAnimation } from "framer-motion";
// Thumbnail Images (640x800)
import thumbnail_1 from "../../public/thumb1.png";
import thumbnail_2 from "../../public/thumb2.png";
import thumbnail_3 from "../../public/thumb3.png";
import thumbnail_4 from "../../public/thumb4.png";
import thumbnail_5 from "../../public/thumb5.png";
import thumbnail_6 from "../../public/thumb6.png";
import thumbnail_7 from "../../public/thumb7.png";
import thumbnail_8 from "../../public/thumb8.png";
import thumbnail_9 from "../../public/thumb9.png";
import thumbnail_10 from "../../public/thumb10.png";
import thumbnail_11 from "../../public/thumb11.png";
import thumbnail_12 from "../../public/thumb12.png";


import content_1 from "../../public/thumb1desc.jpeg";
import content_2 from "../../public/astro_image.png";
import content_3 from "../../public/palmsthumb.jpg";
import content_4 from "../../public/thumb4desc.jpg";
import content_5 from "../../public/unnssrythumb.jpg";
import content_6 from "../../public/thumbdesi.jpg";
import content_7 from "../../public/umithumb.jpg";
import content_8 from "../../public/mrnthumb.jpg";
import content_9 from "../../public/holykicksthumb.jpg";
import content_10 from "../../public/ibhthumb.jpg"
import content_11 from "../../public/itcthumb.jpg"
import content_12 from "../../public/bhramathumb.jpg"
import content_13 from "../../public/pekathumb.jpg"
import content_14 from "../../public/gamethumb.jpg"

import { color } from "framer-motion";

const data = [
  {
    id: 1,
    thumbnail: thumbnail_1,
    title: "UMIMATCHA",
    description: "DESIGN/BRANDING",
    content: content_7,
  },
  {
    id: 2,
    thumbnail: thumbnail_2,
    title: "DESIDHARTI",
    description: "DES/BRANDING/WEBSITE",
    content: content_6,
  },
  {
    id: 3,
    thumbnail: thumbnail_3,
    title: "PEEKABOO",
    description: "DES/PACKAGING",
    content: content_13,
  },
  {
    id: 4,
    thumbnail: thumbnail_4,
    title: "HOLYKICKS",
    description: "BRANDING/WEBSITE",
    content: content_9,
  },
  {
    id: 5,
    thumbnail: thumbnail_5,
    title: "IBH",
    description: "SMM/MARKETING",
    content: content_10,
  },
  {
    id: 6,
    thumbnail: thumbnail_6,
    title: "BHRAMA",
    description: "SMM/PRODUCTION",
    content: content_12,
  },

  {
    id: 7,
    thumbnail: thumbnail_7,
    title: "PALMS",
    description: "SMM/PRODUCTION",
    content: content_3,
  },
  {
    id: 8,
    thumbnail: thumbnail_8,
    title: "ITC",
    description: "SMM/PRODUCTION",
    content: content_11,
  },
  {
    id: 9,
    thumbnail: thumbnail_9,
    title: "GAMEDIAZ",
    description: "SMM",
    content: content_14,
  },

  {
    id: 10,
    thumbnail: thumbnail_10,
    title: "ASTRO",
    description: "SMM",
    content: content_2,
  },
  

  {
    id: 12,
    thumbnail: thumbnail_12,
    title: "UNNECESSARY",
    description: "DES/BRANDING/SMM/WEBSITE",
    content: content_5,
  },
 
];

const Thumbnail = memo(({ item, index, activeIndex, dataLength, onMouseEnter }) => {
  const isActive = index % dataLength === activeIndex;
  
  return (
    <motion.div
      className={`thumbnail-scroll ${isActive ? "active" : ""}`}
      onMouseEnter={() => onMouseEnter(item, index)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <img src={item.thumbnail} alt={item.title} />
    </motion.div>
  );
});

// Memoized content section
const ContentSection = memo(({ selectedItem, theme }) => {
  return (
    <motion.div 
      className="right-section-top-scroll"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <p style={{color: theme.backgroundColor}}>{selectedItem.title}</p>
      <p style={{color: theme.backgroundColor}}>{selectedItem.description}    </p>
      <p style={{color: theme.backgroundColor, fontSize: "0.8rem"}}>
      OUR CLIENTS <br/><br/><br/>
      We don’t chase trends—we set them. With innovation, storytelling, and design that captivates, we transform brands into unforgettable experiences. Whether through expressive creativity, high-energy strategy, or sleek minimalism, we craft movements that inspire and influence.
        <br/><br/><br/><br/>
        mellowyellow@gmail.com
      </p>
      <p style={{color: theme.backgroundColor}}>IST:2:30pm  </p>
    </motion.div>
  );
});

// Memoized scroll content wrapper
const ScrollContent = memo(({ currentPosition, doubleData, activeIndex, onMouseEnter }) => {
  return (
    <motion.div 
      className="scroll-content"
      style={{
        transform: `translateY(-${currentPosition}px)`,
        transition: 'transform 0.5s ease-in-out'
      }}
    >
      {doubleData.map((item, index) => (
        <Thumbnail
          key={`${item.id}-${index}`}
          item={item}
          index={index}
          activeIndex={activeIndex}
          dataLength={data.length}
          onMouseEnter={onMouseEnter}
        />
      ))}
    </motion.div>
  );
});

const ScrollComponent = () => {
  const { theme } = useColor();
  const [selectedItem, setSelectedItem] = useState(data[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollRef = useRef(null);
  const controls = useAnimation();
  const animationRef = useRef(null);
  
  const ITEM_HEIGHT = 210;
  const doubleData = React.useMemo(() => [...data, ...data], []);

  const isInView = useInView(scrollRef, {
    margin: "-100px 0px",
    once: false
  });

  const updatePosition = useCallback(() => {
    setCurrentPosition(prev => {
      const totalItems = data.length;
      const nextPosition = prev + ITEM_HEIGHT;
      return nextPosition >= totalItems * ITEM_HEIGHT ? 0 : nextPosition;
    });
  }, []);

  useEffect(() => {
    if (isInView && isAnimating) {
      animationRef.current = setInterval(updatePosition, 2000);
    }
    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [isInView, isAnimating, updatePosition]);

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
        y: 50,
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

  const handleMouseEnter = useCallback((item, index) => {
    setIsAnimating(false);
    setSelectedItem(item);
    setActiveIndex(index % data.length);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (isInView) {
      setIsAnimating(true);
    }
  }, [isInView]);

  return (
    <div className="container-scroll">
      <motion.div 
        className="left-section-scroll" 
        onMouseLeave={handleMouseLeave}
        ref={scrollRef}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <div className="inner-container-scroll">
          <ScrollContent
            currentPosition={currentPosition}
            doubleData={doubleData}
            activeIndex={activeIndex}
            onMouseEnter={handleMouseEnter}
          />
        </div>
      </motion.div>
      
      <div className="right-section-scroll">
        <ContentSection selectedItem={selectedItem} theme={theme} />
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

export default memo(ScrollComponent);