import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import './styles/Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <h2 className="big-heading">Muhammad Asad Hussain.</h2>
        <h3 className="big-heading typewriter">
          <Typewriter
            words={['Software Engineer', 'Full Stack Developer', 'Mobile App Developer']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h3>
        <p>
          Transforming ideas into reality through clean code and creativity. Building solutions that makes an impact in the real world.
        </p>
        
      </div>
      <div className="connect-links-container">
        <div className="connect-links">
          <a href="https://github.com/AsaDev1" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} color='#333' />
          </a>
          <a href="https://www.linkedin.com/in/asadev/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} color='#0077B5' />
          </a>
          <a href="https://www.instagram.com/dot_asad" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} color="#E1306C"/>
          </a>
          <a href="https://www.facebook.com/muhammad.asad.871603" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} color="#1877F2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;