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

export default function Home() {
  return (
    <div style={styles.title}>
      <h1>Hello!</h1>
      <p>
        Welcome, here you will find my Portfolio page. This site was built using React. Enjoy!
      </p>
    </div>
  );
}
