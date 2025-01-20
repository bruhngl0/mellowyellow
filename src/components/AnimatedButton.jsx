import React from 'react';
import '../styles/animatedbutton.scss';

const AnimatedButton = ({ text, href = "#" }) => {
  return (
    <a href={href} className="animated-btn">
      {text}
    </a>
  );
};

export default AnimatedButton;