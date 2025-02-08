import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import "../styles/Client.scss";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(CustomEase);
import { useColor } from "../context/ColorContext";

import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { TiHomeOutline } from "react-icons/ti";

const Client = ({ images, content }) => {
  const { theme } = useColor();
  const sliderRef = useRef(null);
  const titleRef = useRef(null);
  const servicesRefs = useRef([]);
  const descriptionRef = useRef(null);
  const yearRef = useRef(null);
  const navigationRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const slider = sliderRef.current;
    const images = slider.querySelectorAll("img");

    const animateSlider = () => {
      const direction = Math.random() > 0.5 ? "top" : "bottom";
      const nextIndex = (currentIndex + 1) % images.length;

      gsap.fromTo(
        images[nextIndex],
        { y: direction === "top" ? "-100%" : "100%", opacity: 1 },
        {
          y: "0%",
          opacity: 1,
          duration: 1,
          ease: "elastic.out(1,1)",
        }
      );

      gsap.to(images[currentIndex], {
        y: direction === "top" ? "100%" : "-100%",
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1,1)",
      });

      setCurrentIndex(nextIndex);
    };

    const interval = setInterval(animateSlider, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    // Text Animation
    gsap.fromTo(
      [
        titleRef.current,
        descriptionRef.current,
        yearRef.current,
        navigationRef.current,
      ],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.3,
        stagger: 0.3,
        ease: "power4.inOut",
      }
    );

    // Services Animation
    servicesRefs.current.forEach((serviceRef, index) => {
      gsap.fromTo(
        serviceRef,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.3,
          delay: index * 0.3,
          ease: "power4.inOut",
        }
      );
    });
  }, []);

  return (
    <div className="container">
      <div className="overlay-text-client" style={{
       color: theme.backgroundColor,
      }}>
        KOK-2024
      </div>
      <div ref={sliderRef} className="slider-section">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={index === currentIndex ? "active" : ""}
          />
        ))}
      </div>
      <div className="content-section">
        <div className="top-section">
          <h1 ref={titleRef} className="title">
            
          </h1>
        </div>
       
      </div>
    </div>
  );
};

export default Client;
