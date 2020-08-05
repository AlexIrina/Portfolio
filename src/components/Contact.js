import React from 'react';

const Contact = () => {
  return (
    <div className='contact-section'>
      <h1
        onMouseOut={() => {
          let x = document.getElementsByClassName('fill-out');
          var i;
          for (i = 0; i < x.length; i++) {
            x[i].classList.remove('active');
          }
        }}
        onMouseOver={() => {
          let x = document.getElementsByClassName('fill-out');
          var i;
          for (i = 0; i < x.length; i++) {
            x[i].classList.add('active');
          }
        }}
      >
        Contact
      </h1>
      <form id='form'>
        <input className='fill-out' type='text' placeholder='Full Name' />
        <input className='fill-out' type='email' placeholder='Email' />
        <textarea className='fill-out' placeholder='Message Me' />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
