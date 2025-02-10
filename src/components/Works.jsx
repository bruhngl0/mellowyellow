import { useState, useEffect, useRef } from "react";
import "../styles/works.scss";

const items = [
  {
    id: 1,
    image: "https://via.placeholder.com/100",
    content: "Content for Image 1: Enabling predictive driving for better traffic flow."
  },
  {
    id: 2,
    image: "https://via.placeholder.com/100",
    content: "Content for Image 2: Smart city lighting solutions for safer navigation."
  },
  {
    id: 3,
    image: "https://via.placeholder.com/100",
    content: "Content for Image 3: Data-driven road infrastructure for urban development."
  }
];

const Works = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: [0.3, 0.7]
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
          const index = imageRefs.current.findIndex((el) => el === entry.target);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    imageRefs.current.forEach((image) => {
      if (image) {
        observer.observe(image);
      }
    });

    return () => {
      imageRefs.current.forEach((image) => {
        if (image) {
          observer.unobserve(image);
        }
      });
    };
  }, []);

  const handleImageClick = (index) => {
    setActiveIndex(index);
    imageRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <div className="scroll-container-works">
      <div className="left-section-works">
        {items.map((item, index) => (
          <img
            key={item.id}
            src={item.image}
            alt={`Thumbnail ${index + 1}`}
            ref={(el) => {
              imageRefs.current[index] = el;
            }}
            className={`scroll-image-works ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleImageClick(index)}
            loading="lazy"
          />
        ))}
      </div>
      <div className="right-section-works">
        <div className="content-box-works">
          <p>{items[activeIndex].content}</p>
        </div>
      </div>
    </div>
  );
};

export default Works;
