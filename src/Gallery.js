import React from 'react';
import './Gallery.css'; // 스타일 파일을 불러옵니다.

const Gallery = () => {
  // 4x4 그리드의 데이터
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
              <a href={`/images/gallery/${cell}.jpg`} target="_blank">
                <img src={`/images/gallery/${cell}.jpg`} alt="An example image" />
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Gallery;