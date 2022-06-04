import React from 'react';
import '../styles/Navbar.css';

// TODO: Create a styles object called "styles"

function Navbar({ currentPage, handlePageChange }) {
  // TODO: Add a style attribute to `nav`
  return (
    <nav className="navbar">
        <li className="site-title">
          <a href="#Home" onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >ALEX ORTEGA</a>
        </li>
      {/* <a href="/" className="site-title">Alex Ortega</a> */}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a href="#About" onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >ABOUT ME</a>
        </li>
        <li className="nav-item">
          <a href="#Portfolio" onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >PORTFOLIO</a>
        </li>
        <li className="nav-item">
          <a href="#Contact" onClick={() => handlePageChange('Contact')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >CONTACT</a>
        </li>
        <li className="nav-item">
          <a href="#Resume" onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >RESUME</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
