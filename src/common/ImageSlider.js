import React from 'react';
import M from 'materialize-css';
import SliderImages from '../components/SliderImages';

const ImageSlider = () => {
  /* eslint-disable no-unused-vars */
  setTimeout(() => {
    let elem = document.querySelector('.slider');
    let options = document.querySelector('.slider');
    let instance = M.Slider.init(elem, (options = { indicators: false }));
  });
  /* eslint-disable no-unused-vars */

  return (
    <div className='slider'>
      <SliderImages />
    </div>
  );
};
export default ImageSlider;
