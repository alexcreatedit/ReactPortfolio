import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import resume from './assets/Alex Ortega Resume.pdf';

const styles = {
  title: {
    textAlign: 'center',
    margin: 20,
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};

export default function Resume() {
  return (
    <div style={styles.title}>
      <h1>Resume</h1>
      <p>
        Here you can find a copy of my most recent resume.
        Please do not hesitate to email, call or reach out to me for any questions!
      </p>
      <a href={resume} download>
        Resume <FontAwesomeIcon icon={faDownload} />
      </a>

    </div>
  );
}
