import React from 'react';

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

export default function About() {
  return (
    <div style={styles.title}>
      <h1>About Me</h1>
      <p>
      My name is Alex. I am a freelance photographer and artist. Currently a dev student and former IT Specialist with the US ARMY. I am here to create. I love Football, Family, and Livin' Life. "We all got it. We just have to unlock it.""
      </p>
    </div>
  );
}
