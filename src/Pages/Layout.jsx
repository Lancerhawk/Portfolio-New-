import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HomeContent from '../components/HomePage/HomePage';
import AboutContent from '../components/AboutContent/AboutContent';
import ProjectsContent from '../components/ProjectsContent/ProjectsContent';
import ContactContent from '../components/ContactContent/ContactContent';
import Certifications from '../components/Certifications/Certifications';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import ScrollSmoother from 'gsap-trial/ScrollSmoother';

const Layout = () => {
  const [content, setContent] = useState('home');

  const handleNavClick = (section) => {
    setContent(section);
  };

  const renderContent = () => {
    switch (content) {
      case 'about':
        return <AboutContent />;
      case 'projects':
        return <ProjectsContent />;
      case 'contact':
        return <ContactContent />;
      case 'certification':
        return <Certifications />;
      case 'home':
      default:
        return <HomeContent />;
    }
  };

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
  //   let smoother = ScrollSmoother.create({
  //     wrapper: '.content-wrapper',
  //     content: '.contents',
  //     smooth: 1,
  //     smoothTouch: 0.1
  //   });
  // })

  return (
    <div className='content-wrapper'>
      <div className='contents'>
        <header>
          <Navbar onNavClick={handleNavClick} />
        </header>
        <main>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Layout;
