import React from 'react';
import { ReactTyped } from 'react-typed';
import { FaTwitter, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import './HomePage.css';
import myphoto from '../../assets/photos/myphoto.png'

const HomePage = () => {
  return (
    
    <div className='Homepage'>



      <div className="homepage-container">


        <div className="left-section">
          <h1>Hi, I am Arin Jain<br />I am a{" "}
            <ReactTyped
              strings={[
                " Fullstack Developer",
                " Game Developer",
              ]}
              typeSpeed={100}
              backSpeed={100}
              backDelay={1000}
              loop
            />

          </h1>
          <p>
            Passionate about coding and always eager to learn new technologies. I love
            developing innovative applications that solve real-world problems.
          </p>

          <div className="social-icons">
            <a href="https://x.com/Arin_Jain420" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://wa.link/vbycf0" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/in/arin-jain-782098258/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Lancerhawk" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="right-section">
          <div className="frame-animation">
            <img src={myphoto} alt="Arin Jain" className="profile-pic" draggable="false" />
          </div>
        </div>
      </div>

    </div>


  );
};

export default HomePage;
