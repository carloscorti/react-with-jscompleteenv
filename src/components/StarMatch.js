/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Game from './Game';

const StarMatch = (props) => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} newGame={()=>setGameId(gameId+1)} starsInit={props.starsInit} />
}

export default StarMatch;