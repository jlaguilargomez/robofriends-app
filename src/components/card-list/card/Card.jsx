import React from 'react';
// import * from './Card.css'

const Card = ({ id, name, email }) => {

  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-5">
      <img src={`https://robohash.org/ass${id}`} alt="robot imagen"></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
