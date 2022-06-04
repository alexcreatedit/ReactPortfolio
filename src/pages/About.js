import React from 'react';
import headShot from './assets/Fontana-33.jpg'

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
      <figure className='image is-128x128 ml-5'>
        <img className='is-rounded' src={headShot} alt='My profile pic' />
      </figure>
      <h1>About Me</h1>
      <p>
        My name is Alex. Originally from Sunny Socal, born and raised in the Inland Empire. I am a freelance photographer and artist. Currently I am a dev student and a former IT Specialist with the US ARMY. After years of being on the networking side of IT. I finally decided I wanted to move to the Software side. I understand the challenges this career field holds and am more than ready to take them on. I can't express enough how good it feels to see your work pay off. Coding presents this challenge and such a rewarding feeling when you finally figure something out. I am here to create. I love Football, Family, and Livin' Life. I am excited to see what my future holds.</p>

      <p> 
       If you have any questions, please do not hesitate to reach out. Cheers and Happy Coding!
      </p>
    </div>
  );
}
