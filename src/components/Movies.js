import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderMovies = movies.map((movie) => {
    return <div>Title:{movie.title} Time:{movie.time} Genres:{movie.genres}</div>
  });

  return (
    <div>
      <h1>Movies Page</h1>
      {renderMovies}
    </div>
  );
};

export default Movies;