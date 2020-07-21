import React from 'react';


const Contact = () => {
  return (
    <div className='contact-section'>
      <h1>Contact</h1>
      <form>
        <input type='text' placeholder='Full Name' />
        <input type='email' placeholder='Email' />
        <textarea placeholder='Message Me' />
        <button>Submit</button>
      </form>
      {/* <div className='social-links'>
        <ul>
          <li>
            <a
              href='http://www.facebook.com/pandaMan24/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={facebook} alt='facebook' className='facebook-icon'/>
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/coders_gear/'>
              <img src={insta} alt='instagram' className='insta-icon'/>
            </a>
          </li>
          <li>
            <a
              href='http://github.com/AlexIrina'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={github} alt='github' className='git-icon'/>
            </a>
          </li>
        </ul>
      </div>
      <p>2020 Copyright. All Rights Reserved</p> */}
    </div>
  );
};

export default Contact;
