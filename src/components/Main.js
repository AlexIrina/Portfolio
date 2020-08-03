import React from 'react';
import image from '../images/test.jpg';
import { Link } from 'react-router-dom';
import Footer from './Footer';
const Main = () => {
  return (
    <div className='main-container'>
      <div className='intro'>
        <div className='left'>
          <h1>
            <strong>Hi</strong>,
            <br />
            Im Alex,
            <br />
            Web Developer.
          </h1>
          <br />
          <span data-text='HTML' id='html'>
            {' '}
            HTML{' '}
          </span>
          {''} / {''}
          <span data-text='CSS' id='css'>
            CSS
          </span>{' '}
          {''} / {''}
          <span data-text='JS' id='js'>
            JS
          </span>{' '}
          {''} / {''}
          <span data-text='REACT' id='react'>
            REACT
          </span>
          {''} / {''}
          <span data-text='NODE' id='node'>
            NODE
          </span>
          <br />
          <button className='contact-btn'>
            <Link to='/contact'>Contact Me </Link>
          </button>
        </div>
        <img src={image} alt='me' />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
