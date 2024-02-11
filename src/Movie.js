import React from 'react';

const Movie = () => {
  return (
    <div>
      <div className='title'>MOVIE</div>
      <div className='sub-title'>
        준성이 직접 편집한 추억 영상
      </div>
      <video controls>
        <source src={'/movie.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Movie;