import React from 'react';
import './Card.css';
import Card from './Card';

function Cards({ cards }) { // Accept cards as a prop
  return (
    <div className='cards-flex'>
      {cards.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
}

export default Cards;

