import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import M from 'materialize-css';

const Navbar = () => {
  /* eslint-disable no-unused-vars */
  useEffect(() => {
    let elem = document.querySelector('.sidenav');
    let options = document.querySelector('.sidenav');
    let instance = M.Sidenav.init(elem, options);
  });
  /* eslint-disable no-unused-vars */

  return (
    <React.Fragment>
      <div className='navbar-fixed'>
        <nav className='indigo lighten-3'>
          <div className='nav-wrapper'>
            <Link to='/students' className='brand-logo'>
              <i className='large material-icons'>local_library</i>NY Times
              Reading Challenge
            </Link>
            <a href='#!' data-target='mobile-demo' className='sidenav-trigger'>
              <i className='material-icons'>menu</i>
            </a>
            <ul className='right hide-on-med-and-down'>
              <li>
                <NavLink to='/students'>Students</NavLink>
              </li>
              <li>
                <NavLink to='/books'>Books</NavLink>
              </li>
              <li>
                <NavLink to='/readinglog'>Reading Log</NavLink>
              </li>
              <li>
                <NavLink to='/login'>Login</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className='sidenav' id='mobile-demo'>
        <li>
          <NavLink to='/students' className='sidenav-close'>
            Students
          </NavLink>
        </li>
        <li>
          <NavLink to='/books' className='sidenav-close'>
            Books
          </NavLink>
        </li>
        <li>
          <NavLink to='/readinglog' className='sidenav-close'>
            Reading Log
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' className='sidenav-close'>
            Login
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Navbar;
