import React, { useState } from 'react';
import styled from 'styled-components';
import CardContent from './CardContent';
import cardData from '../cardData.json';
const Work = () => {
  const [selectedSkill, setSelectedSkill] = useState('');

  // console.log(cardData);
  const mappedCards = cardData.map((card) => (
    <CardContent key={card.id} content={card} category={selectedSkill} />
  ));

  return (
    <div className='work-section'>
      <Header
        onMouseOut={() => {
          let x = document.getElementsByClassName('card-front');
          var i;
          for (i = 0; i < x.length; i++) {
            x[i].classList.remove('active');
          }
        }}
        onMouseOver={() => {
          let x = document.getElementsByClassName('card-front');
          var i;
          for (i = 0; i < x.length; i++) {
            x[i].classList.add('active');
          }
        }}
      >
        Work
      </Header>
      <div className='work-btns-container'>
        <button id='designBtn' onClick={() => setSelectedSkill('Web Design')}>
          Web Design
        </button>
        <button id='cssBtn' onClick={() => setSelectedSkill('Css')}>
          CSS Projects
        </button>
        <button id='reactBtn' onClick={() => setSelectedSkill('React')}>
          React Projects
        </button>
      </div>
      <div className='card' id='card'>
        {mappedCards}
      </div>
    </div>
  );
};

export default Work;

const Header = styled.h1`
  font-size: 140px;
  color: white;
  margin: 0px 50px;
  width: 342px;
`;
