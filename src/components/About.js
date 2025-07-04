import React from 'react';
import { FaPython, FaDatabase, FaCode, FaTools, FaChartBar } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiDocker, SiMongodb, SiAmazonwebservices } from 'react-icons/si';
import './styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        {/* About Me Card */}
        <div className="about-card">
          <h2>About Me</h2>
          <p>
            I'm Asad Hussain, a dedicated Software Engineering student with strong proficiency in MERN stack, backend systems,
            and modern front-end frameworks. Passionate about solving complex problems and building scalable, cloud-ready apps.
          </p>
        </div>

        {/* Skills Card */}
        <div className="skills-card">
          <h2>Skills</h2>

          {/* Programming Languages */}
          <div className="skill-category">
            <h3><FaCode color="#f34b7d" /> Programming Languages</h3>
            <p>JavaScript, Java, Python, SQL, C, C++</p>
          </div>

          {/* Frameworks & Libraries */}
          <div className="skill-category">
            <h3><SiReact color="#61DAFB" /> Frameworks & Libraries</h3>
            <p>React, Node.js, Express.js</p>
          </div>

          {/* Developer Tools */}
          <div className="skill-category">
            <h3><FaTools color="#ff6384" /> Developer Tools & Platforms</h3>
            <p>Git, GitHub, Docker, Postman, Kubernetes</p>
          </div>

          {/* Databases */}
          <div className="skill-category">
            <h3><FaDatabase color="#00758f" /> Databases</h3>
            <p>MongoDB</p>
          </div>

          {/* Cloud Platforms */}
          <div className="skill-category">
            <h3><SiAmazonwebservices color="#FF9900" /> Cloud</h3>
            <p>AWS</p>
          </div>

          {/* Core Concepts */}
          <div className="skill-category">
            <h3><FaChartBar color="#4BC0C0" /> Concepts</h3>
            <p>OOP, REST APIs, MVC Architecture, Microservices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
