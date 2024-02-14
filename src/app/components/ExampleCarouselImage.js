import Image from 'next/image';
import React from 'react';

const ExampleCarouselImage = ({ placeholderName }) => {
  return (
    <div>
      {/* <Image src={`https://placehold.co/600x400?text=${placeholderName}`} alt={placeholderName} /> */}
      <img
        src={`https://placehold.co/600x400?text=${placeholderName}`}
        alt={placeholderName}
      />
    </div>
  );
};

export default ExampleCarouselImage;
