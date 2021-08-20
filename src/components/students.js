import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../common/ImageSlider';
import Popout from './Popout';
import bestbooks from '../img/bestbooks.mp4';

const Students = () => {
  return (
    <React.Fragment>
      <div className='row'>
        <ImageSlider />
      </div>
      <div className='row' id='book-review'>
        <div
          className='col s7  center-align'
          id='video'
          style={{ paddingLeft: '0px' }}
        >
          <video loop autoPlay muted className='container'>
            <source src={bestbooks} type='video/mp4' />
          </video>
          {/* <p>Source: https://www.nytimes.com/article/top-book-lists.html</p> */}
          <div className='container'>
            <h6>
              Not only does the NY Times Reading Challenge promote academic
              reading habits, it also provides a path toward journalism.
            </h6>
          </div>
        </div>
        <div className='col s4 center-align' id='popout'>
          <Popout />
          <div className='center-align'>
            <Link to='/books' className='waves-effect waves-light btn-large'>
              <i className='material-icons right'>local_library</i>Books
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Students;
