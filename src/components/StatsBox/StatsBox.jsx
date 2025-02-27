import React from 'react';
import './StatsBox.css';
import { FaGithub, FaLink, FaCode } from 'react-icons/fa';

function StatsBox() {

  return (
    <div className="stats-box">
      <div className="stats-card">
        <h3 className="card-title">DSA Questions Solved</h3>
        <div className="card-content">
          <span className="count">120+ Questions</span>
        </div>
        <div className="social-links">
          <a href="https://leetcode.com/u/70001933arin/" target="_blank" rel="noopener noreferrer">
            <FaCode className="social-icon" />
          </a>
          <a href="https://www.geeksforgeeks.org/user/lancerhawk/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
        </div>
      </div>

      <div className="stats-card">
        <h3 className="card-title">Projects Built</h3>
        <div className="card-content">
          <span className="count">10+ Projects</span>
        </div>
        <div className="social-links">
          <a href="https://github.com/Lancerhawk" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/arin-jain-782098258/" target="_blank" rel="noopener noreferrer">
            <FaLink className="social-icon" />
          </a>
        </div>
      </div>

      <div className="stats-card">
        <h3 className="card-title">Experience</h3>
        <div className="card-content">
          <span className="count">6 Month</span>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/arin-jain-782098258/" target="_blank" rel="noopener noreferrer">
            <FaLink className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default StatsBox;
