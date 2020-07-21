import React from 'react';
import facebook from '../images/facebook.png';
import insta from '../images/insta.png';
import github from '../images/github.png';
const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a
            href='http://www.facebook.com/pandaMan24/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={facebook} alt='facebook' className='facebook-icon' />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/coders_gear/'>
            <img src={insta} alt='instagram' className='insta-icon' />
          </a>
        </li>
        <li>
          <a
            href='http://github.com/AlexIrina'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={github} alt='github' className='git-icon' />
          </a>
        </li>
      </ul>
      <p>2020 Copyright. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
