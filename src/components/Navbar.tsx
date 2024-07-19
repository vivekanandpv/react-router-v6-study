import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          {/* <NavLink> is a special version of the <Link> that will add 
          styling attributes to the rendered element when it matches the current URL. */}

          {/* The className prop works like a normal className, but you can also
          pass it a function to customize the classNames applied based on the
          active and pending state of the link. */}
          <NavLink
            to='/'
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? 'pending' : '',
                isActive ? 'active' : '',
                isTransitioning ? 'transitioning' : '',
              ].join(' ')
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          {/* replaces (or overwrites) the previous link in the history. Useful in login page scenarios  */}
          <NavLink to='/about?lang=kn' replace>
            About
          </NavLink>
        </li>
        <li>
          {/* reloads the whole application instead of single-page navigation. 
          The reloadDocument property can be used to skip client side routing 
          and let the browser handle the transition normally (as if it were an <a href>). */}
          <NavLink to='/contact' reloadDocument>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/news/tech'
            state={{ message: 'passed from NavLink for /news/tech' }}
          >
            News - Tech
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/news/science'
            state={{ message: 'passed from NavLink for /news/science' }}
          >
            News - Science
          </NavLink>
        </li>
        <li>
          <NavLink to='/customers'>Customers</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
