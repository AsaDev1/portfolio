import React from 'react';
import './styles/Projects.css';

const Projects = () => {
  return (
    <section className="projects-coming-soon">
      <div className="projects-wrapper">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-message">
          <span className="emoji">🚧</span>
          <p className="main-text">Projects are under construction</p>
          <p className="sub-text">Stay tuned — exciting work will be showcased here soon!</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
