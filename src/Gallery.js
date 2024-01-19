import React, { useState } from 'react';
import './Gallery.css'; // 스타일 파일을 불러옵니다.

const ImageComponent = ({ cell }) => (
  <img src={`/images/gallery/${cell}.jpg`} alt="An example image" />
);

const MemoizedImage = React.memo(ImageComponent);

const Gallery = () => {
  const maxImageId = 6;

  const [currentImageId, setCurrentImageId] = useState(1);

  const handlePrevImage = () => {
    const prevImageId = currentImageId > 1 ? currentImageId - 1 : maxImageId;
    setCurrentImageId(prevImageId);
  };

  const handleNextImage = () => {
    const nextImageId = currentImageId < maxImageId ? currentImageId + 1 : 1;
    setCurrentImageId(nextImageId);
  };

  const gridData = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
  ];

  return (
    <div className="grid-container">
      <div className="title">
        GALLERY
      </div>
      <div className='sub-title'>
        준성이와 민지의 사랑으로 가득 채운 셀프 촬영 모음집
      </div>
      {gridData.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, colIndex) => (
            <div key={colIndex} className="grid-cell">
              <button onClick={handlePrevImage}>Previous</button>
              <a href={`/images/gallery/${cell}.jpg`} >
                <MemoizedImage cell={cell} />
              </a>
              <button onClick={handleNextImage}>Next</button>
            </div>

          ))}
        </div>
      ))}
    </div>
  );
};

export default React.memo(Gallery);