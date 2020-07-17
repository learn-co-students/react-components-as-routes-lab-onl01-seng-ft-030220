import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const renderActors = actors.map((actor) => {
    return <div>Name{actor.name} Movies:{actor.movies}</div>
  });

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors}
    </div>
  );
};

export default Actors;
