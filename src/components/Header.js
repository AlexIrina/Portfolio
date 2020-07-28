import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav className='nav-header'>
      <ul>
        <li id='title'>
          <Link className='underline' to='/'>
            Alex
          </Link>
        </li>
        <li className='list'>
          <Link className='underline' to='/about'>
            ABOUT ME
          </Link>
        </li>
        <li className='list'>
          <Link className='underline' to='/skills'>
            SKILLS
          </Link>
        </li>
        <li className='list'>
          <Link className='underline' to='/work'>
            MY WORK
          </Link>
        </li>
        <li className='list'>
          <Link className='underline' to='/contact'>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
