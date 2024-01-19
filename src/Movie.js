import React from 'react';

const Movie = () => {
  return (
    <div>
      <div className='title'>MOVIE</div>
      <video width="800" controls>
        <source src={'/movie.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Movie;