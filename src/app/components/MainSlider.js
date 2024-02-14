'use client';
import React, { useRef } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const MainSlider = () => {
  const carouselRef = useRef();

  return (
    <div ref={carouselRef}>
      <UncontrolledCarousel
        fade
        items={[
          {
            altText: 'Check over regular yoga classes',
            caption: 'Sky Yoga',
            key: 1,
            src: '/assets/images/slider/Slider1.jpg',
          },
          {
            altText: 'Online Yoga Training Courses',
            caption: 'Beginner | Intermediate | Advanced',
            key: 2,
            src: '/assets/images/slider/Slider2.jpg',
          },
        ]}
      />
    </div>
  );
};

export default MainSlider;
