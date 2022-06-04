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
    background: 'white',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '3.5rem',
    color: 'black',
    padding: '0 20px',
  },
  content: {
    display: 'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    gap: '.5rem',
    listStyle: 'none',

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
      <a style={styles.heading} href={resume} download>
        Download <FontAwesomeIcon icon={faDownload} />
      </a>
      <ul style={styles.content} className='content is-medium'>
        <h2>Front End</h2>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>React</li>
        <li>GitHub</li>
      </ul>
      <ul style={styles.content} className='content is-medium'>
        <h2>Back End</h2>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Webpack</li>
        <li>GraphQL</li>
      </ul>

    </div>
  );
}
