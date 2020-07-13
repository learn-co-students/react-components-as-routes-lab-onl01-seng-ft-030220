import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map((movie) => (
          <div>
            <h1>Movie: {movie.title}</h1>
            <h4>Movie Time: {movie.time}</h4>
            <ul>Genres: {movie.genres.map((genre) => (
              <li>{genre}</li>
            ))})</ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;