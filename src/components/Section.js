import React from 'react';
import '../styles/Section.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStackOverflow,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";




function Section() {
  return (
    <div class="social-container" style={{display:"flex", justifyContent: "center",
    alignItems: "center", paddingTop:"20px",}}>
      <a href="https://stackoverflow.com/users/19267144/alex-ortega" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faStackOverflow} size="3x" />
      </a>
      <a href="https://github.com/alexcreatedit" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
      <a href="https://www.linkedin.com/in/alexmortega/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>
    </div>
  );
}

export default Section;
