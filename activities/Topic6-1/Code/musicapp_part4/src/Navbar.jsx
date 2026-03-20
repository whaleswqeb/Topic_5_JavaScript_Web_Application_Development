import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <span className='navbar-brand' href='#'>
        Music App
      </span>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <span className='nav-item nav-link active'>
            <Link to='/'>Home</Link>
          </span>
          <span className='nav-item nav-link'>
            <Link to='/new'>Add Album</Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;