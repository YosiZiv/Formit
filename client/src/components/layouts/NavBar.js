import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => (
  <nav class='navbar navbar-expand-lg navbar-light bg-light'>
    <a class='navbar-brand'>Formit</a>
    <button
      class='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarNavAltMarkup'
      aria-controls='navbarNavAltMarkup'
      aria-expanded='false'
      aria-label='Toggle navigation'
    >
      <span class='navbar-toggler-icon'></span>
    </button>
    <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
      <div class='navbar-nav'>
        <NavLink
          activeClassName='nav-active'
          to='/'
          className='nav-item nav-link active'
        >
          Home <span class='sr-only'>(current)</span>
        </NavLink>
        <NavLink
          className='nav-item nav-link'
          activeClassName='nav-active'
          to='/login'
        >
          Login
        </NavLink>
        <NavLink
          className='nav-item nav-link'
          activeClassName='nav-active'
          to='/register'
        >
          Register
        </NavLink>
        <NavLink
          className='nav-item nav-link'
          activeClassName='nav-active'
          to='/formbuild'
        >
          Build Form
        </NavLink>
        <NavLink
          className='nav-item nav-link disabled'
          activeClassName='nav-active'
          to='/'
        >
          Disabled
        </NavLink>
      </div>
    </div>
  </nav>
);
export default NavBar;
