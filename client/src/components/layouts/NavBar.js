import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = ({ isAuth }) => (
  <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <a className='navbar-brand'>Formit</a>
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
        <NavLink
          activeClassName='nav-active'
          to='/'
          className='nav-item nav-link active'
        >
          Home <span className='sr-only'>(current)</span>
        </NavLink>
        {!isAuth && (
          <NavLink
            className='nav-item nav-link'
            activeClassName='nav-active'
            to='/login'
          >
            Login
          </NavLink>
        )}

        {!isAuth && (
          <NavLink
            className='nav-item nav-link'
            activeClassName='nav-active'
            to='/register'
          >
            Register
          </NavLink>
        )}
        {isAuth && (
          <NavLink
            className='nav-item nav-link'
            activeClassName='nav-active'
            to='/formbuild'
          >
            Build Form
          </NavLink>
        )}
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
