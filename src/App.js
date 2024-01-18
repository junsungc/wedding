import './App.css';

function App() {
  console.log("hii")
  console.log(process.env.PUBLIC_URL)
  return (
    <div className="container">
      {/* 사진 추가 */}
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
      <div className="image-wrapper">
        <img src={'/images/5.png'} alt="Image 1" />
      </div>
      <div className="image-wrapper">
        <img src={'/images/6.png'} alt="Image 1" />
      </div>
      <div className="image-wrapper">
        <img src={'/images/7.png'} alt="Image 1" />
      </div>
      <div className="image-wrapper">
        <img src={'/images/8.png'} alt="Image 1" />
      </div>
      {/* 추가적인 사진들도 유사하게 추가 가능 */}
    </div>
  );
}

export default App;
