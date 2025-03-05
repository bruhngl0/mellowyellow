import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/hover.scss";
import { useColor } from "../context/ColorContext";

const Hover = ({ servicesData }) => {
  const { theme } = useColor();
  const [activeService, setActiveService] = useState(servicesData[0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6, once: true });

  const variants = {
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.section 
      className="hover-section" 
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="hover-container" variants={variants}>
        {/* Left Side - Services List */}
        <motion.div className="hover-list" variants={variants}>
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className={`hover-card ${activeService.id === service.id ? "active" : ""}`}
              onMouseEnter={() => setActiveService(service)}
              style={{ borderBottom: `0.5px solid ${theme.backgroundColor}` }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              {service.icon}
              <h3>{service.title}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Side - Service Details with Single Video */}
        <motion.div className="hover-details" style={{ backgroundColor: theme.backgroundColor }} variants={variants}>
          <motion.video
            src="v2.mp4"
            controls
            autoPlay
            muted
            loop
            className="service-video"
            style={{ width: "100%", maxWidth: "500px", height: "auto", boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)" }}
            whileHover={{ scale: 1.02 }}
          />
          <motion.p style={{ fontSize: "1.2rem", textAlign: "center", maxWidth: "400px", marginTop: "10px" }} variants={variants}>
            {activeService.description}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hover;

