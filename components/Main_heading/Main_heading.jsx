import React from 'react';
import './Main_heading.css';  // Importing the CSS file

const Main_heading = ({ image, title, subtitle }) => {
  return (
    <div className="head_section">
      {/* Image with overlay */}
      <div className="image-container">
        <img src={image} alt={title} className="main-image" />
        <div className="overlay"></div> {/* Orange overlay */}
      </div>

      {/* Text content centered in the middle of the screen */}
      <div className="text-content">
        <h1 className="title text-headerFont">{title}</h1>
        <p className="subtitle text-subFont">{subtitle}</p>
      </div>
    </div>
  );
};

export default Main_heading;
