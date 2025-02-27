import React, { useState, useEffect } from "react";
import './Corousel.css';

function Corousel({ project }) {
  const { images, techStack, description, moreDetailsLink } = project; 
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const photoArray = Object.values(images);

  useEffect(() => {
    setCurrentPhoto(0); 
  }, [project]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev === photoArray.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [photoArray.length]);

  const handleMoreDetailsClick = () => {
    window.open(moreDetailsLink, "_blank");  
  };

  return (
    <div className="corousel-container">
      <div className="corousel-photo-area">
        <div className="corousel-photo">
          <img src={photoArray[currentPhoto]} alt="Project" className="corousel-project-photo" />
        </div>
      </div>
      <div className="corousel-content-area">
        <div className="corousel-paragraph">
          <p>{description}</p>
        </div>
        <h2 className="members-heading">Members:</h2>
        <div className="corousel-tags">
          {techStack.map((tag, index) => (
            <a 
              key={index} 
              href={tag.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="corousel-tech-tag"
            >
              {tag.name}
            </a>
          ))}
        </div>
        <div className="corousel-buttons">
          <button 
            className="corousel-github-btn"
            onClick={handleMoreDetailsClick} 
          >
            More Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Corousel;
