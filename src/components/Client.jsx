import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import "../styles/Client.scss";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(CustomEase);

import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { TiHomeOutline } from "react-icons/ti";

const Client = ({ images, content }) => {
  const sliderRef = useRef(null);
  const titleRef = useRef(null);
  const servicesRef = useRef(null);
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
        servicesRef.current,
        descriptionRef.current,
        yearRef.current,
      ],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
      }
    );

    // Navigation Section Animation
    gsap.fromTo(
      navigationRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        delay: 1.5,
      }
    );
  }, []);

  return (
    <div className="container">
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
        <h1 ref={titleRef} className="title">
          {content.title}
        </h1>
        <h2 ref={servicesRef} className="services">
          {content.services}
        </h2>
        <p ref={descriptionRef} className="description">
          {content.description}
        </p>
        <h3 ref={yearRef} className="year">
          {content.year}
        </h3>
        <div ref={navigationRef} className="navigation-section">
          <button className="home-button" onClick={() => navigate("/")}>
            <TiHomeOutline size={40} />
          </button>
          <button
            className="back-button"
            onClick={() => {
              const currentPath = window.location.pathname;
              const currentNumber = parseInt(currentPath.split("-")[1]);
              if (currentNumber > 1) {
                navigate(`/client-${currentNumber - 1}`);
              }
            }}
            disabled={parseInt(window.location.pathname.split("-")[1]) === 1}
            style={{
              opacity:
                parseInt(window.location.pathname.split("-")[1]) === 1
                  ? 0.5
                  : 1,
              cursor:
                parseInt(window.location.pathname.split("-")[1]) === 1
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            <IoArrowBack size={40} />
          </button>
          <button
            className="next-button"
            onClick={() => {
              const currentPath = window.location.pathname;
              const currentNumber = parseInt(currentPath.split("-")[1]);
              if (currentNumber < 6) {
                navigate(`/client-${currentNumber + 1}`);
              }
            }}
            disabled={parseInt(window.location.pathname.split("-")[1]) === 6}
            style={{
              opacity:
                parseInt(window.location.pathname.split("-")[1]) === 6
                  ? 0.5
                  : 1,
              cursor:
                parseInt(window.location.pathname.split("-")[1]) === 6
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            <IoArrowForward size={40} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Client;
