import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { SiDiscord } from 'react-icons/si';
import './styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="heading">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-text">
            <p>
              I'm currently looking for new opportunities. Whether you have a question
              or just want to say hi, feel free to reach out through any of the channels below.
            </p>

            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope size={20} color="#D44638" />
                <a href="mailto:realasadhussain@gmail.com">realasadhussain@gmail.com</a>
              </div>
              <div className="contact-item">
                <FaPhoneAlt size={20} color="#34A853" />
                <span>+92 312 7532199</span>
              </div>
              <div className="contact-item">
                <SiDiscord size={20} color="#7289DA" />
                <span>AxDev1</span>
              </div>
            </div>
          </div>

          <div className="social-links">
            <div className="social-item">
              <FaGithub size={24} color="white" />
              <a href="https://github.com/AsaDev1" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="social-item">
              <FaLinkedin size={24} color="#0077B5" />
              <a href="https://linkedin.com/in/Asadev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="social-item">
              <FaInstagram size={24} color="#E1306C" />
              <a href="https://www.instagram.com/dot_asad" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="social-item">
              <FaFacebook size={24} color="#1877F2" />
              <a href="https://www.facebook.com/muhammad.asad.871603" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
