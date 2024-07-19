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
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
          <NavLink to='/news/tech'>News - Tech</NavLink>
        </li>
        <li>
          <NavLink to='/news/science'>News - Science</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
