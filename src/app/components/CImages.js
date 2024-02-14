import Image from 'next/image';
import React from 'react';

const CImages = ({ alt, slide }) => {
  return (
    <div>
      {/* <Image
        className='d-block w-100'
        src={`https://placehold.co/1440x600?text=${placeholderName}`}
        alt={placeholderName}
      /> */}
      <img className='d-block w-100' src={slide} alt={alt} />
    </div>
  );
};

export default CImages;
