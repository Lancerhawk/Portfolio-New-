import React, { useState } from 'react';
import './Projects.css';

const importImages = (requireContext) => {
  return requireContext.keys().map(requireContext);
};

const medickit = importImages(require.context('../../assets/bg/Project Drug watch', false, /\.(jpg|jpeg|png)$/));
const dandelion = importImages(require.context('../../assets/bg/Project 2', false, /\.(jpg|jpeg|png)$/));
const battleorg = importImages(require.context('../../assets/bg/Project 3', false, /\.(jpg|jpeg|png)$/));
const druginventory = importImages(require.context('../../assets/bg/Project 4', false, /\.(jpg|jpeg|png)$/));
const druginventorydy = importImages(require.context('../../assets/bg/Project 5', false, /\.(jpg|jpeg|png)$/));
const portfo = importImages(require.context('../../assets/bg/Project 6', false, /\.(jpg|jpeg|png)$/));
const museum = importImages(require.context('../../assets/bg/Project 7', false, /\.(jpg|jpeg|png)$/));
const skillmorph = importImages(require.context('../../assets/bg/Project 8', false, /\.(jpg|jpeg|png)$/));
const employee = importImages(require.context('../../assets/bg/Project 9', false, /\.(jpg|jpeg|png)$/));
const expense = importImages(require.context('../../assets/bg/Project 10', false, /\.(jpg|jpeg|png)$/));
const vital = importImages(require.context('../../assets/bg/Project12', false, /\.(jpg|jpeg|png)$/));

function ProjectsContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalTitle, setModalTitle] = useState('');
  const [filter, setFilter] = useState('all'); 

  const projects = [

    {
      category: ['websites', 'latest', 'softwares', 'AIs'],
      title: 'Project: VitalCheck || Cancer Detection AI',
      description:
        'Made for Early Detection of Cancer using AI using Blood test reports, MRI scans, CT scans, etc. This project was made during the AI for HealthCare Hackathon. Created Profiles for Individuals and Doctors.',
      coverImage: vital[0], 
      images: vital,    
      technologies: ['Javascript','React.JS','TensorFlows','Keras', 'OpenCV'],
      github: 'https://github.com/Lancerhawk/Cancer-DetectionAI',
      live: 'https://cancer-detection-d57r83ul8-lancerhawks-projects.vercel.app/',
    },
    {
      category: ['softwares', 'websites', 'latest'],
      title: 'Project: MedicKit || Drug Management System',
      description:
        'A supply chain management system for hospitals, created during the hackathon of SIH2024 as a finalist member of a team. This system allows hospitals to manage their drug inventory in real time, ensuring efficient supply chain management, and reducing stockouts and overstocking.',
      coverImage: medickit[0],  
      images: medickit,
      technologies: ['React', 'Node.js', 'PostgresQL', 'Express'],
      github: 'https://github.com',
      live: 'https://project-medic-kit-633s1zbup-lancerhawks-projects.vercel.app/',
    },
    {
      category: ['websites', 'latest', 'softwares'],
      title: 'Employee Management System',
      description:
        'This project started as an experiment to enhance my React skills while diving into the world of file system storage. With a growing interest in backend development and curiosity about file storage, I challenged myself to build an Employee Management System. Here, users can log in as either an employee or admin, access personalized dashboards, and manage tasks—all without relying on external databases.',
      coverImage: employee[0],
      images: employee,    
      technologies: ['Javascript','React.JS','React Router','Vite','UI/UX'],
      github: 'https://github.com/Lancerhawk/Employee-Management-System',
      live: 'https://employee-management-system-4s1y-ex5ps0ppl-lancerhawks-projects.vercel.app/',
    },
    {
      category: ['websites', 'latest', 'softwares'],
      title: 'Expense Tracking System',
      description:
        'The Transaction Management System is a web application that helps users track their finances by managing income and expenses. It allows users to Log in and out of their account, Add transactions (expenses or income) with categories, amounts, and descriptions, View interactive analytics charts to visualize spending and income trends.',
      coverImage: expense[0], 
      images: expense,    
      technologies: ['Javascript','React.JS','React Router','UI/UX'],
      github: 'https://github.com/Lancerhawk/Expense-Management-System',
      live: '',
    },
    {
      category: ['games'],
      title: 'Dande-lions Game',
      description:
        'A 2D Game created Using Unity with C# language. As i was stepping my foot in college life, i got an interest in designing and making games, here is my first ever game, which i made using Unity after learning programming using C#',
      coverImage: dandelion[0], 
      images: dandelion,    
      technologies: ['Unity Game Engine', 'C#', 'Asp.net', 'UI/UX'],
      github: 'https://github.com/Lancerhawk/Dande-Lions-Game.git',
      live: 'https://lancerhawk.itch.io/dande-lions',
    },
    {
      category: ['websites'],
      title: 'Battle.Org Web',
      description:
        'Game Tournament website created while i was in 2nd semester to  conduct a tournament locally in our city',
      coverImage: battleorg[0], 
      images: battleorg,    
      technologies: ['HTML', 'CSS', 'Javascript', 'UI/UX'],
      github: 'https://github.com/Lancerhawk/GameTournament_Website',
      live: 'https://battle.org.in/',
    },
    {
      category: ['websites'],
      title: 'Drug Inventory(static)',
      description:
        'This was initial phase and statis preview design of our MedicKit website, which was made to show during the presentation to explain the working of our main project and AIM.',
      coverImage: druginventory[0], 
      images: druginventory,    
      technologies: ['HTML', 'CSS', 'Javascript', 'UI/UX'],
      github: 'https://github.com/Lancerhawk/DrugInventorySystem',
      live: 'https://lancerhawk.github.io/DrugInventorySystem/',
    },
    {
      category: ['websites'],
      title: 'Drug Inventory(dynamic)',
      description:
        'After being accepted by internal hackathon(SIH), i created a designed layout of the dashboard of our idea to present during final screening.',
      coverImage: druginventorydy[0], 
      images: druginventorydy,    
      technologies: ['Javascript', 'React.JS', 'UI/UX'],
      github: 'https://github.com/Lancerhawk/DrugInventoryDashboard-React-',
      live: 'https://drug-inventory-dashboard-react-7pdg8aqey-lancerhawks-projects.vercel.app/',
    },
    {
      category: ['websites'],
      title: 'Portfolio(Old)',
      description:
        'Created a Portfolio for myself during my 2nd semester of college.',
      coverImage: portfo[0], 
      images: portfo,    
      technologies: ['HTML', 'CSS', 'Javascript', 'UI/UX'],
      github: 'https://github.com/Lancerhawk/Portfolio',
      live: 'https://lancerhawk.github.io/Portfolio/',
    },
    {
      category: ['websites'],
      title: 'Museum Ticketing Design',
      description:
        'Idea for creating a chatbot system for ordering or registering tickets of museums for minor project in college.',
      coverImage: museum[0], 
      images: museum,    
      technologies: ['Javascript','React.JS','React Router','UI/UX'],
      github: 'https://github.com/Lancerhawk/OnlineTicketBooking_Museum-Homepage-design',
      live: 'https://online-ticket-booking-museum-homepage-design.vercel.app/',
    },
    {
      category: ['websites'],
      title: 'SkillMorph',
      description:
        'Created this design or Frontend design for ISTD hackathon which happened in online mode.',
      coverImage: skillmorph[0], 
      images: skillmorph,    
      technologies: ['Javascript','Typescript','React.JS','React Router','UI/UX'],
      github: 'https://github.com/Lancerhawk/OnlineTicketBooking_Museum-Homepage-design',
      live: 'https://online-ticket-booking-museum-homepage-design.vercel.app/',
    },
  ];

  const openModal = (projectTitle, projectImages) => {
    setModalTitle(projectTitle);
    setModalImages(projectImages);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImages([]);
    setModalTitle('');
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <div className="projects">
      <h1 className="heading-projects">My Projects</h1>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {['all','latest', 'websites', 'games', 'softwares', 'AIs'].map(category => (
          <button
            key={category}
            className={filter === category ? 'active' : ''}
            onClick={() => setFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.title} className="project-card">
            <div
              className="project-image"
              onClick={() => openModal(project.title, project.images)}
            >
              <img src={project.coverImage} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description.slice(0, 60)}...</p>
              <button
                className="read-more-btn"
                onClick={() => openModal(project.title, project.images)}
              >
                Read More
              </button>
              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              x
            </button>
            <h3 className="modal-title">{modalTitle}</h3>
            <div className="modal-description">
              <p>
                {projects
                  .find((project) => project.title === modalTitle)
                  .description}
              </p>
              Here are some images of my project:
            </div>
            <div className="modal-image-gallery">
              {modalImages.map((image, index) => (
                <div key={index} className="modal-image-item">
                  <img src={image} alt={`Image ${index + 1}`} />
                  <div className="image-hover-btn">
                    <button
                      onClick={() => {
                        window.open(image, '_blank');
                      }}
                    >
                      Open in New Tab
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectsContent;
