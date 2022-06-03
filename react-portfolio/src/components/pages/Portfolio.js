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

export default function Portfolio() {
  return (
    <div style={styles.title}>
      <h1>Portfolio</h1>
      <p>
      Here you can find some of my work. Growth is everything and I continue to challenge myself to learn and get better.
      </p>
    </div>
  );
}
