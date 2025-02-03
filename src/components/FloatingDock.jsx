import React from 'react';
import { motion } from 'framer-motion';
import { useColor } from '../context/ColorContext'; // Import theme context
import { themes } from '../App'; // Import theme sets

import '../styles/floating-dock.scss';

const FloatingDock = () => {
  const { setTheme } = useColor(); // Access theme updater

  return (
    <motion.div
      className="floating-dock"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="dock-items">
        {themes.map((theme, index) => (
          <motion.div
            key={index}
            className="dock-item"
            style={{
              display: 'flex',
              gap: '5px',
              padding: '5px',
              borderRadius: '10px',
              cursor: 'pointer',
              backgroundColor: theme.backgroundColor,
            }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme)}
          >
            <div
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: theme.primaryColor,
                borderRadius: '5px',
              }}
            ></div>
            <div
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: theme.secondaryColor,
                borderRadius: '5px',
              }}
            ></div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FloatingDock;
