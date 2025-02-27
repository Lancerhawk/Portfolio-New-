import React, { useState } from 'react';
import './Certifications.css';
import Google1 from '../../assets/Certifications_Images/Google-CyberSecurity-Professional-certificate/Google CyberSecurity Professional certificate_page-0001.jpg';
import FullstackBootcamp from '../../assets/Certifications_Images/GFG-FullstackdeveloperBootcamp/GFG FullstackdeveloperBootcamp_page-0001.jpg';
import IntroFrontend from '../../assets/Certifications_Images/Introduction-to-Front-End-Development/Introduction to Front-End Development_page-0001.jpg';
import IBM from '../../assets/Certifications_Images/IBM/IBMSKILLBUILD.jpg';
import MachineLearning from '../../assets/Certifications_Images/Machine Learning Training/Acmegrade_page-0001.jpg';
import JSessential1 from '../../assets/Certifications_Images/JavaScript-Essentials-1/JavaScript Essentials 1_page-0001.jpg';
import JSessential2 from '../../assets/Certifications_Images/Javascript-Essentials-2/Javascript Essentials 2_page-0001.jpg';
import SIH from '../../assets/Certifications_Images/SIH2024/SIH 2024.jpg';
import ISTD from '../../assets/Certifications_Images/ISTDHackathon/ISTD.jpg';
import EduSkill from '../../assets/Certifications_Images/ArinJainEduSkills/eduskill.png'
import IEEE from '../../assets/Certifications_Images/IEEEMemberCertificate-1-1/Ieee.jpg'
import CS from '../../assets/Certifications_Images/Introduction-to-Cybersecurity/Introduction to Cybersecurity_page-0001.jpg'
import FE from '../../assets/Certifications_Images/Introduction-to-Front-End-Development/Introduction to Front-End Development_page-0001.jpg'
import Packet from '../../assets/Certifications_Images/Introduction-to-Packet-Tracer/Introduction to Packet Tracer_page-0001.jpg'
import Investiment from '../../assets/Certifications_Images/Investiment-Risk-Management/Investiment Risk Management_page-0001.jpg'
import Nodejs from '../../assets/Certifications_Images/NodeJS-webinar/NodeJS webinar_page-0001.png'
import JS from '../../assets/Certifications_Images/Programming-with-JavaScript/Programming with JavaScript_page-0001.jpg'
import CyberSecurityEssentials from '../../assets/Certifications_Images/Cybersecurity Essentials badge_pages-to-jpg-0001.jpg'
import GovCertification from '../../assets/Certifications_Images/Gov certification (1)_pages-to-jpg-0001.jpg'
import HTML from '../../assets/Certifications_Images/Introduction to HTML_page-0001.jpg'
import MicrosoftExcel from '../../assets/Certifications_Images/Introduction to Microsoft Excel_page-0001.jpg'
import JSB from '../../assets/Certifications_Images/JavaScript for Beginners_page-0001.jpg'
import VersionControl from '../../assets/Certifications_Images/Version Control_page-0001.jpg'
import FCS1 from '../../assets/Certifications_Images/Fortinet/FCA-FortiGate7.4Operator_page-0001.jpg'
import FCS2 from '../../assets/Certifications_Images/Fortinet/FCF-GettingStartedInCyberSecurity2.0_page-0001.jpg'
import FCS3 from '../../assets/Certifications_Images/Fortinet/FCF-IntroductionToTheThreatLandscape2.0_page-0001.jpg'
import FCS4 from '../../assets/Certifications_Images/Fortinet/FCF-TechnicalIntroductionToCyberSecurity1.0_page-0001.jpg'
import Ultron from '../../assets/Certifications_Images/UltronHackathon/Untitled design (3).png'
import HackJMI from '../../assets/Certifications_Images/HackJMI/Untitled design.png'
import Corousel from './CorouselViewer';
import AI from '../../assets/Certifications_Images/AIforHealthCare/AI for HealthCare.jpg'

const internshipCertifications = [
  { id: 1, title: 'IBM Skill Build Training', image: IBM },
  { id: 2, title: 'Machine Learning Training', image: MachineLearning },
  { id: 3, title: 'EduSkills Learning Platform Certification', image: EduSkill },
];

const hackathonCertifications = [
  { id: 4, title: 'SIH 2024 Hackathon Finalist', image: SIH  },
  { id: 4, title: 'AI for HealthCare Hackathon', image: AI  },
  { id: 5, title: 'ISTD Online Hackathon', image: ISTD  },
  { id: 6, title: 'Ultron 8.0 SRM Hackathon ', image: Ultron },
  { id: 4, title: 'HackJMI', image: HackJMI  },
];

const lifetimeAchievements = [
  { id: 7, title: 'Google Cybersecurity Certification', image: Google1 },
  { id: 8, title: 'JavaScript Essentials - Level 1', image: JSessential1 },
  { id: 9, title: 'JavaScript Essentials - Level 2', image: JSessential2 },
  { id: 10, title: 'Introduction to Front-End Development', image: IntroFrontend },
  { id: 11, title: 'FullStack Development BootCamp Completion', image: FullstackBootcamp },
  { id: 12, title: 'Introduction to Cybersecurity', image: CS },
  { id: 13, title: 'Programming with JavaScript Certificate', image: JS },
  { id: 14, title: 'Front-End Development Course Certificate', image: FE },
  { id: 15, title: 'Version Control Certification', image: VersionControl },
  { id: 16, title: 'Fortinet FCA-FortiGate Operator Certification', image: FCS1 },
  { id: 17, title: 'Fortinet FCF CyberSecurity Basics Certification', image: FCS2 },
  { id: 18, title: 'Fortinet FCF Threat Landscape Certification', image: FCS3 },
  { id: 19, title: 'Fortinet FCF CyberSecurity Technical Introduction', image: FCS4 },
  { id: 20, title: 'NodeJS Webinar Certificate', image: Nodejs },
  { id: 21, title: 'Microsoft Excel Certificate', image: MicrosoftExcel },
  { id: 22, title: 'JavaScript for Beginners Certificate', image: JSB },
  { id: 23, title: 'Cybersecurity Essentials Certification', image: CyberSecurityEssentials },
  { id: 24, title: 'Investment Risk Management Course', image: Investiment },
  { id: 25, title: 'Introduction to Packet Tracer Certification', image: Packet },
  { id: 26, title: 'Government Certification Award', image: GovCertification },
  { id: 27, title: 'Introduction to HTML Certificate', image: HTML },
  { id: 28, title: 'IEEE Member Certification', image: IEEE },
];


const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <div className="certifications">
      <h1>My Certifications & Achievements</h1>
        <h2 className='closer-head'>My Journies & Wins</h2>

      <Corousel/>

      <section className="certifications-section">
        <h2>High Level Achievements</h2>
        <div className="certifications-grid">
          <div className="certifications-left">
            <h3>Internship Certifications</h3>
            <div className="certifications-grid1">
              {internshipCertifications.map((cert) => (
                <div
                  key={cert.id}
                  className="cert-card"
                  onClick={() => openModal(cert)}
                >
                  <div className="img-placeholder">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      className="cert-image"
                      srcSet={`${cert.image} 1x, ${cert.image}?w=800 2x`} 
                    />
                  </div>
                  <div className="cert-title">{cert.title}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="certifications-right">
            <h3>Hackathon's Certifications</h3>
            <div className="certifications-grid1">
              {hackathonCertifications.map((cert) => (
                <div
                  key={cert.id}
                  className="cert-card"
                  onClick={() => openModal(cert)}
                >
                  <div className="img-placeholder">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      className="cert-image"
                      srcSet={`${cert.image} 1x, ${cert.image}?w=800 2x`}
                    />
                  </div>
                  <div className="cert-title">{cert.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lifetime Achievements Section */}
      <section className="certifications-section">
        <h2>Lifetime Achievements & Certifications</h2>
        <div className="certifications-grid2">
          {lifetimeAchievements.map((cert) => (
            <div
              key={cert.id}
              className="cert-card"
              onClick={() => openModal(cert)}
            >
              <div className="img-placeholder">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="cert-image"
                  srcSet={`${cert.image} 1x, ${cert.image}?w=800 2x`} 
                />
              </div>
              <div className="cert-title">{cert.title}</div>
            </div>
          ))}
        </div>
      </section>

      {selectedCert && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedCert.title}</h2>
            <img src={selectedCert.image} alt={selectedCert.title} />
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
