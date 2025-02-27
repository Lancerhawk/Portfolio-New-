import React from 'react';
import './About.css';
import StatsBox from '../StatsBox/StatsBox';

function AboutContent() {
  const skills = [
    'JavaScript','Typescript', 'React.js', 'Node.js & Express.js', 'PHP',
    'MongoDB', 'PostgreSQL', 'Kotlin', 'Figma', 'Unity Game Engine' , 'DSA(C++)'  , 
  ];

  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate Full Stack Developer with experience in building
            scalable, secure, and reliable web applications. I enjoy solving
            complex problems and learning new technologies.
          </p>
          <p>
            With a strong foundation in both front-end and back-end development,
            I strive to create user-friendly applications that solve real-world
            problems.
          </p>
          <p>
            My Major technical skills includes: PERN & MERN stack, Kotlin . 
          </p>

        </div>
        <div className="skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
      <StatsBox/>
    </div>
  );
}

export default AboutContent;