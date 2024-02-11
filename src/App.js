import './App.css';
import Movie from './Movie.js'
import CountdownTimer from './CountdownTimer.js'
import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ImageComponent = ({ num }) => (
  <img src={`/images/${num}.png`} alt="An example image" />
);

const MemoizedImage = React.memo(ImageComponent);

const images = [];

for (let i = 1; i <= 16; i++) {
  images.push({
    original: `/images/gallery/${i}.jpg`,
    thumbnail: `/images/gallery/thumbnail/${i}.jpg`,
  });
}

function App() {
  return (
    <div className="container">
      {/* 사진 추가 */}
      <CountdownTimer></CountdownTimer>
      <MemoizedImage num={1}></MemoizedImage>
      <MemoizedImage num={2}></MemoizedImage>
      <MemoizedImage num={3}></MemoizedImage>
      <MemoizedImage num={4}></MemoizedImage>
      <div className="title">
        GALLERY
      </div>
      <div className='sub-title'>
        사랑으로 가득 채운 셀프 촬영 모음집
      </div>
      <ImageGallery items={images} showFullscreenButton={true} showBullets={true} showPlayButton={false} thumbnailPosition='top' />
      <Movie></Movie>

      <MemoizedImage num={5}></MemoizedImage>

      <div className="title">
        LOCATION
      </div>
      <MemoizedImage num={6}></MemoizedImage>
      <a href='https://map.naver.com/p/entry/place/37000810?lng=126.4654499&lat=33.4604171&placePath=%2F&entry=plt&searchType=place&c=12.02,0,0,0,dh' target='_blank'>
        <MemoizedImage num={7}></MemoizedImage>
      </a>
      <div className="title">
        CONTACT
      </div>
      <MemoizedImage num={8}></MemoizedImage>
    </div >
  );
}

export default App;
