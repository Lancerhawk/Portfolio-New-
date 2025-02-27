import React, { useState } from "react";
import './CorouselViewer.css';
import Corousel from './Corousel'; 

function importImages(r) {
  let images = {};
  r.keys().map((item) => { images[item.replace('./', '')] = r(item); return item;});
  return images;
}

const projects = [
  {
    id: 1,
    images: importImages(require.context('../../assets/bg/WinProject11', false, /\.(jpg|jpeg|png)$/)),
    techStack: [
      { name: "Arin Jain", linkedin: "https://www.linkedin.com/in/arin-jain-782098258/" },
      { name: "Shanti Mishra", linkedin: "https://www.linkedin.com/in/shanti-mishra-3b0a04330/" },
      { name: "Mradul Deodhiya", linkedin: "https://www.linkedin.com/in/mradul-deodhiya-86b632234/" },
      { name: "Tanishq Yadav", linkedin: "https://www.linkedin.com/in/tanishq-yadav-4511b033b/" }
    ],    
    description: "Won the Internal AI hackathon on HealthCare in Baderia Global Institute of Engineering and Management. Our Problem Statement was Creating an AI Prediction model for early Cancer detection and using Mammograms for Accurately doing Analysis of the cancer.",
    moreDetailsLink: "https://www.linkedin.com/feed/update/urn:li:activity:7298995821952266240/",
  },
  {
    id: 2,
    images: importImages(require.context('../../assets/bg/SIH', false, /\.(jpg|jpeg|png)$/)),
    techStack: [
      { name: "Aayush Kewat", linkedin: "https://www.linkedin.com/in/aayush-kewat-a3a91a215/" },
      { name: "Arin Jain", linkedin: "https://www.linkedin.com/in/arin-jain-782098258/" },
      { name: "Harshit Jain", linkedin: "https://www.linkedin.com/in/harshit-jain-72b101237/" },
      { name: "Shachi Shukla", linkedin: "https://www.linkedin.com/in/shachi-shukla-b72b86258/" },
      { name: "Palak Neekhra", linkedin: "https://www.linkedin.com/in/palak-neekhra-98b518217/" },
      { name: "Nimish Dubey", linkedin: "https://www.linkedin.com/" }
    ],
    description: "Became the Finalists and went to Chennai at Sai Ram College for the finale round of Smart India Hackathon 2024. Our Problem Statement was Drug Inventory and Supply Chain Management System.",
    moreDetailsLink: "https://www.linkedin.com/feed/update/urn:li:activity:7276279497396543488/",  
  },
  {
    id: 3,
    images: importImages(require.context('../../assets/bg/IITKharagpur', false, /\.(jpg|jpeg|png)$/)),
    techStack: [
      { name: "Arin Jain", linkedin: "https://www.linkedin.com/in/arin-jain-782098258/" },
      { name: "Arpit Shukla", linkedin: "https://www.linkedin.com/in/arpit-s-5207a4253/" },
    ],
    description: "Went to Global Enterpreneuship Summit At IIT Kharagpur! Participated in Handson Workshops, Ceremony, Events etc. Made Connections with IITians, Professors, Enterpreneurs and learned about Software Development, Cybersecurity and Team Management by Industry Experts.",
    moreDetailsLink: "https://www.linkedin.com/feed/update/urn:li:activity:7295469868399620097/",  
  },
];

function CorouselViewer() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index) => {
    setCurrentProjectIndex(index);
  };

  return (
    <div className="corousel-viewer">
      <button className="corousel-viewer-arrow left" onClick={handlePrevProject}>❮</button>

      <Corousel 
        project={projects[currentProjectIndex]} 
      />

      <button className="corousel-viewer-arrow right" onClick={handleNextProject}>❯</button>

      {/* Bubbles section */}
      <div className="corousel-bubbles">
        {projects.map((_, index) => (
          <div 
            key={index} 
            className={`corousel-bubble ${index === currentProjectIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default CorouselViewer;
