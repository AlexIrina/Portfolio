import React from 'react';
const CardContent = (props) => {
  return (
    <div className='card-content'>
      <div className='card-front'>
        <h3 className='card-title'>{props.content.title}</h3>
        <p className='card-subtitle'>{props.content.subTitle}</p>
      </div>
      <div className='card-back'>
        <p className='card-body'>{props.content.cardBody}</p>
      </div>
    </div>
  );
};

export default CardContent;
