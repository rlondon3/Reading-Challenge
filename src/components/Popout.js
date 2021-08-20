import React, { useEffect } from 'react';
import M from 'materialize-css';

const Popout = () => {
  /* eslint-disable no-unused-vars */
  useEffect(() => {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });
  /* eslint-disable no-unused-vars */

  return (
    <React.Fragment>
      <h5 className='center'>Get Started Today!</h5>
      <ul className='collapsible popout'>
        <li>
          <div className='collapsible-header'>
            <h6 className='left-align'>
              <i className='large material-icons'>local_library</i>Read 5 Books
              In One Semester
            </h6>
          </div>
          <div className='collapsible-body'>
            <span>
              Browse the NY Times bestsellers list and begin the journey by
              reading your first book.
            </span>
          </div>
        </li>
        <li>
          <div className='collapsible-header'>
            <h6 className='left-align'>
              <i className='material-icons'>rate_review</i> Keep A Reading
              Journal
            </h6>
          </div>
          <div className='collapsible-body'>
            <span>
              Keeping a reading journal is important to ensure you are able to
              complete the reading log. The log requires you to fill in
              information about the bestseller you have read, so be sure to
              document main ideas and import details from the text.
            </span>
          </div>
        </li>
        <li>
          <div className='collapsible-header'>
            <h6 className='left-align'>
              <i className='material-icons'>send</i> Submit A Log and Start Your
              Next Book
            </h6>
          </div>
          <div className='collapsible-body'>
            <span>
              After reading a bestseller, you must complete the reading log.
              Once submitted, we will send the log to your ELA teacher for
              assessment. Congratulations, you have completed a NY Times
              bestseller. Which book will you read next?
            </span>
          </div>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Popout;
