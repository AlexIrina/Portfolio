import React from 'react';
import CardContent from './CardContent';
import cardData from '../cardData';
const Work = (props) => {
  const mappedCard = cardData.map((card) => (
    <CardContent
      key={card.id}
      title={card.title}
      subTitle={card.subTitle}
      cardBody={card.cardBody}
      // content={{
      //   title: 'Project 1',
      //   subTitle: 'Stuff about the card',
      //   cardBody:
      //     ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, molestias.',
      // }}
    />
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
