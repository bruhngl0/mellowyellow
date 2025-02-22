import { useState } from "react";
import "../styles/hover.scss"
import { useColor } from "../context/ColorContext";

const Hover = ({ servicesData }) => {
     const { theme } = useColor();
  const [activeService, setActiveService] = useState(servicesData[0]);

  return (
    <section className="hover-section">
     
      <div className="hover-container">
        {/* Left Side - Services List */}
        <div className="hover-list">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`hover-card ${
                activeService.id === service.id ? "active" : ""
              }`}
              onMouseEnter={() => setActiveService(service)}
              style={{borderBottom: `0.5px solid ${theme.backgroundColor}`, }}
            >
              {service.icon}
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>

        <div className="hover-details"  style={{backgroundColor: theme.backgroundColor}}>
          <img src={activeService.image} alt={activeService.title} />
          <p>{activeService.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Hover;