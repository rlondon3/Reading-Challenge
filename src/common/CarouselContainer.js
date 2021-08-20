import React from 'react';
import M from 'materialize-css';
import CarouselImages from '../components/carouselImages';

const CarouselContainer = () => {
  /* eslint-disable no-unused-vars */
  setTimeout(() => {
    let elem = document.querySelector('.carousel');
    let options = document.querySelector('.carousel-item');
    const instance = M.Carousel.init(elem, options);
  }, 800);
  /* eslint-disable no-unused-vars */

  return (
    <div className='carousel hide-on-med-and-down'>
      <CarouselImages />
    </div>
  );
};
export default CarouselContainer;
