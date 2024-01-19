import './App.css';
import Gallery from './Gallery.js'
import Movie from './Movie.js'
import CountdownTimer from './CountdownTimer.js'
import React from 'react';

const ImageComponent = ({ num }) => (
  <img src={`/images/${num}.png`} alt="An example image" />
);

const MemoizedImage = React.memo(ImageComponent);


function App() {
  return (
    <div className="container">
      {/* 사진 추가 */}
      <CountdownTimer></CountdownTimer>
      <div className="image-wrapper">
        <MemoizedImage num={1}></MemoizedImage>
      </div>
      <div className="image-wrapper">
        <MemoizedImage num={2}></MemoizedImage>
      </div>
      <div className="image-wrapper">
        <MemoizedImage num={3}></MemoizedImage>
      </div>
      <div className="image-wrapper">
        <MemoizedImage num={4}></MemoizedImage>
      </div>

      <Gallery></Gallery>
      <Movie></Movie>

      <div className="image-wrapper">
        <MemoizedImage num={5}></MemoizedImage>
      </div>
      <div className="image-wrapper">
        <MemoizedImage num={6}></MemoizedImage>
      </div>
    </div>
  );
}

export default App;
