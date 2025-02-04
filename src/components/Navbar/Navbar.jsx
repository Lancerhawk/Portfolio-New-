import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logos/logo1.png';
import resume from '../../assets/files/resume.pdf';
import Spinner from '../Spinner/Spinner'; // Import the spinner component

const Navbar = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const [loading, setLoading] = useState(false); // State to track loading
  const sidebarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page) => {
    setLoading(true); // Show the spinner when navigation starts
    setActivePage(page);
    onNavClick(page);

    // Simulate a delay (e.g., fetch data, load new content)
    setTimeout(() => {
      setLoading(false); // Hide the spinner after content is loaded
      setIsMenuOpen(false);
    }, 1000); // Adjust the timeout to match the loading time
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !event.target.closest('.burger-icon')) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Your Logo" className="logo" draggable="false" />
      </div>
      <div className={`navbar-center ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <button
              onClick={() => handleNavClick('home')}
              className={activePage === 'home' ? 'active' : ''}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('about')}
              className={activePage === 'about' ? 'active' : ''}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('projects')}
              className={activePage === 'projects' ? 'active' : ''}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('certification')}
              className={activePage === 'certification' ? 'active' : ''}
            >
              Certifications
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('contact')}
              className={activePage === 'contact' ? 'active' : ''}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <button
          className="cv-button"
          onClick={() => {
            const link = document.createElement('a');
            link.href = resume;
            link.download = 'resume.pdf'; 
            link.click();
          }}
        >
          Download CV
        </button>
      </div>
      <div className="burger-icon" onClick={toggleMenu}>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </div>
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`} ref={sidebarRef}>
        <ul>
          <li>
            <button
              onClick={() => handleNavClick('home')}
              className={activePage === 'home' ? 'active' : ''}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('about')}
              className={activePage === 'about' ? 'active' : ''}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('projects')}
              className={activePage === 'projects' ? 'active' : ''}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('certification')}
              className={activePage === 'certification' ? 'active' : ''}
            >
              Certifications
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('contact')}
              className={activePage === 'contact' ? 'active' : ''}
            >
              Contact
            </button>
          </li>
          <li>
            <button
              className="cv-button"
              onClick={() => {
                const link = document.createElement('a');
                link.href = resume;
                link.download = 'resume.pdf';
                link.click();
              }}
            >
              Download CV
            </button>
          </li>
        </ul>
      </div>
      
      {/* Show spinner while loading */}
      {loading && <Spinner />}
    </nav>
  );
};

export default Navbar;
