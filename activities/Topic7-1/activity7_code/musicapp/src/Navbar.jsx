import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <span className="logo-icon">♪</span>
          <span className="logo-text">Music App</span>
        </Link>

        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <span className="nav-icon">🏠</span>
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/new" 
              className={`nav-link ${isActive('/new') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <span className="nav-icon">➕</span>
              <span>Add Album</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;