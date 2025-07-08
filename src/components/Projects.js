import React, { useState, useEffect } from 'react';
import { FaGithub, FaTimes } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import './styles/Projects.css';

// --- Project Data ---
const projectsData = [
  {
    title: 'Chatify',
    description: 'A real-time chat application for seamless communication and collaboration.',
    longDescription: 'Chatify is a full-stack, real-time chat application built with the MERN stack and Socket.IO. It allows users to join chat rooms, send messages, and share images instantly. The application features a responsive design and a robust backend to handle concurrent connections.',
    technologies: ['React', 'Node.js', 'Socket.IO', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/AsaDev1/Chatify',
    liveUrl: 'https://chatify-live-demo.com', // Replace with your actual live URL
    imageUrl: 'https://placehold.co/600x400/0a192f/ffffff?text=Chatify',
  },
  {
    title: 'Bits-0f-C0de',
    description: 'A personal blog platform for sharing tech insights and tutorials.',
    longDescription: 'A performance-optimized personal blog built with Next.js for static site generation. It renders posts from Markdown files, supports syntax highlighting, and features a clean, minimalist design with a dark mode toggle for an excellent reading experience.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Markdown'],
    githubUrl: 'https://github.com/AsaDev1/Bits-0f-C0de',
    liveUrl: 'https://bits-of-code-live.com', // Replace with your actual live URL
    imageUrl: 'https://placehold.co/600x400/0a192f/ffffff?text=Bits-0f-C0de',
  },
  {
    title: 'Editor.io',
    description: 'An online code editor for writing and previewing HTML, CSS, and JS.',
    longDescription: 'A lightweight, in-browser code editor that allows developers to write and preview HTML, CSS, and JavaScript code instantly. It uses local storage to save work automatically, making it a handy tool for quick prototyping and testing.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/AsaDev1/Editor.io',
    liveUrl: 'https://editor-io-live.com', // Replace with your actual live URL
    imageUrl: 'https://placehold.co/600x400/0a192f/ffffff?text=Editor.io',
  },
  {
    title: 'Plant AI',
    description: 'A machine learning model to identify plant diseases from leaf images.',
    longDescription: 'This project utilizes a deep learning model (CNN) built with TensorFlow to classify 38 different types of plant diseases from leaf images. The model was trained on a large dataset from Kaggle and achieved high accuracy, demonstrating a practical application of AI in agriculture.',
    technologies: ['TensorFlow', 'Python', 'OpenCV', 'React'],
    githubUrl: 'https://github.com/AsaDev1/Plant-AI',
    liveUrl: '',
    imageUrl: 'https://placehold.co/600x400/0a192f/ffffff?text=Plant+AI',
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
