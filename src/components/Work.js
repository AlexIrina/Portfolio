import React from 'react';
import CardContent from './CardContent';
import cardData from '../cardData';
const Work = () => {
  const mappedCard = cardData.map((card) => (
    <CardContent key={card.id} content={card} />
  ));

  return (
    <div className='work-section'>
      <h1>Work</h1>
      <div className='work-btns-container'>
        <button>Web Design</button>
        <button>CSS Projects</button>
        <button>React Projects</button>
      </div>
      <div className='card'>{mappedCard}</div>
    </div>
  );
};

export default Work;
