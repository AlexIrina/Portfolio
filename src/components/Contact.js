import React from 'react';

const Contact = () => {
  return (
    <div className='contact-section'>
      <h1>Contact</h1>
      <form id='form'>
        <input type='text' placeholder='Full Name' />
        <input type='email' placeholder='Email' />
        <textarea placeholder='Message Me' />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
