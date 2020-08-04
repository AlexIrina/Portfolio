import React from 'react';
import abstractImg from '../images/abstract.jpg';
const About = () => {
  return (
    <div className='about-section'>
      <h1>About</h1>
      <div className='about-paras'>
        <p>
          this is the first paragraph about myself...end of the first paragraph
        </p>
        <p>
          And this is the second paragraph about myself... end of the second
          paragraph
        </p>
        <p>
          And this is the third paragraph about myself... end of the third
          paragraph
        </p>
      </div>
      <img src={abstractImg} alt='abstract' />
    </div>
  );
};

export default About;
