import React from 'react';
import { motion } from 'framer-motion';
import { FaChrome, FaFolder, FaTerminal, FaMusic, FaCog, FaUser } from 'react-icons/fa';
import '../styles/floating-dock.scss';

const FloatingDock = () => {
  const dockItems = [
    { icon: <FaChrome />, label: 'Chrome' },
    { icon: <FaFolder />, label: 'Finder' },
    { icon: <FaTerminal />, label: 'Terminal' },
    { icon: <FaMusic />, label: 'Music' },
    { icon: <FaCog />, label: 'Settings' },
    { icon: <FaUser />, label: 'User' },
    { icon: <FaMusic />, label: 'Music' },
    { icon: <FaCog />, label: 'Settings' },
    { icon: <FaUser />, label: 'User' },
  ];

  return (
    <motion.div
      className="floating-dock"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="dock-items">
        {dockItems.map((item, index) => (
          <motion.div
            key={index}
            className="dock-item"
            whileHover={{ scale: 1.2, y: -10 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="icon">{item.icon}</div>
            <span className="label">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FloatingDock;