import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(({title, time, genres}) => {
          return (
            <div>
              <h3>Name: {title}</h3>
              <p>Time: {time}</p>
              <p>Genres:</p>
              <ul>
              {genres.map(genre => <li>{genre}</li>)}
              </ul>
            </div>
          )
        })}
    </div>
  );
};

export default Movies;
