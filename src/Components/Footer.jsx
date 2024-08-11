// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.css';

const Footer = ({theme}) => {
  return (
    <footer className={"footer "+theme}>
      <div className="social-icons">
        <a href="https://github.com/VARSHITHAGANJI" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://instagram.com/varshithaganji" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="mailto:ganjivarshitha9@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://discord.com/users/varshu" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDiscord} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
