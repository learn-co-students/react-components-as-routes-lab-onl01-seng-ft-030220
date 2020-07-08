import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(({name, movies}) => {
        return (
          <div>
            <h2>Name: {name}</h2>
            <p>Movies: </p>
            <ul>{movies.map(movie => <li>{movie}</li>)}</ul>
          </div>
        )
      })}
    </div>
  );
}

export default Directors
