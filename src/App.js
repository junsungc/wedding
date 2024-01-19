import './App.css';
import Gallery from './Gallery.js'
import Movie from './Movie.js'
import CountdownTimer from './CountdownTimer.js'

function App() {
  return (
    <div className="container">
      {/* 사진 추가 */}
      <CountdownTimer></CountdownTimer>
      <div className="image-wrapper">
        <img src={'/images/1.png'} alt="Image 1" />
      </div>
      <div className="image-wrapper">
        <img src={'/images/2.png'} alt="Image 1" />
      </div>
      <div className="image-wrapper">
        <img src={'/images/3.png'} alt="Image 1" />
      </div>
      <div className="image-wrapper">
        <img src={'/images/4.png'} alt="Image 1" />
      </div>

      <Gallery></Gallery>
      <Movie></Movie>

      <div className="image-wrapper">
        <img src={'/images/5.png'} alt="Image 1" />
      </div>
      <div className="image-wrapper">
        <img src={'/images/6.png'} alt="Image 1" />
      </div>
    </div>
  );
}

export default App;
