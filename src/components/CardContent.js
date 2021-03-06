import React from 'react';
import styled from 'styled-components';
const CardContent = (props) => {

  return (
    <div>
      {(props.category === props.content.category || props.category === '') && (
        <FlipCard >
          <div className='card-front'>
            <h3 className='card-title'>{props.content.title}</h3>
            <p className='card-subtitle'>{props.content.subTitle}</p>
          </div>
          <div className='card-back'>
            <p className='card-body'>{props.content.cardBody}</p>
          </div>
        </FlipCard>
      )}
    </div>
  );
};

export default CardContent;
const FlipCard = styled.div`
text-align: center;
width: 67%;
margin: 0 auto;
transition: transform 1s;
transform-style: preserve-3d;
font-family: 'Oswald', sans-serif;
:hover {
  transform: rotateY(0.5turn);
}
`;
