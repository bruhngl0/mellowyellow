import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/works.scss';

const Works = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sidebarRef = useRef(null);
  const itemRefs = useRef([]);
  
  const works = [
    {
      id: 1,
      title: "Project One",
      description: "Interactive design and development",
      thumbnail: "/api/placeholder/200/200",
      fullImage: "/api/placeholder/800/600",
      category: "Web Design"
    },
    {
      id: 2,
      title: "Project Two",
      description: "Brand identity and visual design",
      thumbnail: "/api/placeholder/200/200",
      fullImage: "/api/placeholder/800/600",
      category: "Branding"
    },
    {
      id: 3,
      title: "Project Three",
      description: "Mobile application interface",
      thumbnail: "/api/placeholder/200/200",
      fullImage: "/api/placeholder/800/600",
      category: "UI/UX"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: sidebarRef.current,
        threshold: 0.5
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="works">
      <div className="works__sidebar" ref={sidebarRef}>
        {works.map((work, index) => (
          <div
            key={work.id}
            ref={el => itemRefs.current[index] = el}
            className="works__item"
          >
            <div className={`works__thumbnail ${activeIndex === index ? 'active' : ''}`}>
              <img src={work.thumbnail} alt={work.title} />
              <div className="works__thumbnail-info">
                <h3>{work.title}</h3>
                <p>{work.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="works__content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="works__content-inner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="works__content-text">
              <h2>{works[activeIndex].title}</h2>
              <p>{works[activeIndex].description}</p>
              <span>{works[activeIndex].category}</span>
            </div>
            <div className="works__content-image">
              <img src={works[activeIndex].fullImage} alt={works[activeIndex].title} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Works;