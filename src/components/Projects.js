import React, { useState, useEffect } from 'react';
import { FaGithub, FaTimes } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import './styles/Projects.css';


import csfypImage from '../assets/projects/csfyp.png';
import todoImage from '../assets/projects/todo-list.jpg'
import xclone from '../assets/projects/x-clone.jpg'
// --- Project Data ---
const projectsData = [
  {
    title: 'Final Year Project Automation Tool',
    description: 'Web Application to manage and handle the Final Year Project Submission, Review and Evaluation for Comsats University, Lahore Campus.',
    longDescription: 'Automated FYP workflow for 300+ students using microservices and secure VPS deployment. Aimd at eliminating the manual management work.',
    technologies: ['React', 'Node.js', 'PostreSQL', 'Docker', 'Github Actions'],
    githubUrl: 'https://github.com/AsaDev1/Chatify',
    liveUrl: 'https://csfyp.live', // Replace with your actual live URL
    imageUrl:csfypImage ,
  },
  {
    title: 'X-Clone',
    description: 'A platform inpired by X(Twitter).',
    longDescription: 'X platform Clone that includes Post, Comment and report functionality with user authentication.',
    technologies: ['React', 'Node.js', 'MongoDB','Tailwind CSS', 'DaisyUI'],
    githubUrl: 'https://github.com/AsaDev1/x-clone',
   // liveUrl: 'https://bits-of-code-live.com', // Replace with your actual live URL
    imageUrl: xclone,
  },
  {
    title: 'E-Commerce Site',
    description: ' E-commerce platform inspired by a popular online shoping site.',
    longDescription: 'E-Commerce platform with user authentication, product listings, cart, and checkout functionality.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    //githubUrl: 'https://github.com/AsaDev1/Editor.io',
   // liveUrl: 'https://editor-io-live.com', // Replace with your actual live URL
    imageUrl: 'https://placehold.co/600x400/0a192f/ffffff?text=E-commerce site',
  },
  {
    title: 'Todo List',
    description: 'An effective Goal Tacking Cross-Platform Mobile Application.',
    longDescription: 'A cross-platform mobile app with CRUD operations to manage daily tasks.',
    technologies: ['React Native', 'Expo'],
    githubUrl: 'https://github.com/AsaDev1/todo-list',
    liveUrl: '',
    imageUrl: todoImage,
  },
];


// --- Modal Component ---
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{project.title}</h3>
          <button onClick={onClose} className="modal-close-button">
            <FaTimes />
          </button>
        </div>
        <div className="modal-body">
          <img src={project.imageUrl} alt={`${project.title} preview`} className="modal-image" />
          <p className="modal-description">{project.longDescription}</p>
          <ul className="project-tech-list">
            {project.technologies.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="modal-footer">
           {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="modal-link-button">
                <FaGithub /> GitHub
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="modal-link-button">
                <CgWebsite /> Live Demo
              </a>
            )}
        </div>
      </div>
    </div>
  );
};


// --- Main Projects Component ---
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Effect to handle body scroll lock
  useEffect(() => {
    const body = document.body;
    if (selectedProject) {
      body.classList.add('modal-open');
    } else {
      body.classList.remove('modal-open');
    }

    // Cleanup function to remove class if component unmounts
    return () => {
      body.classList.remove('modal-open');
    };
  }, [selectedProject]); // Re-run effect when selectedProject changes

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section className="projects-section">
        <div className="projects-container">
          <h2 className="projects-heading">My Recent Works</h2>
          <p className="projects-subheading">
            Here are a few projects I've worked on recently.
          </p>
          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <div className="project-card" key={index} onClick={() => openModal(project)}>
                <div className="project-image-container">
                  <img 
                    src={project.imageUrl} 
                    alt={`${project.title} preview`} 
                    className="project-image"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/0a192f/ffffff?text=Image+Not+Found'; }}
                  />
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-tech-list">
                    {project.technologies.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </>
  );
};

export default Projects;
