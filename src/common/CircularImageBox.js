import React, { useContext } from 'react';
import BooksContext from '../ContextApi/BooksContext';

const CircularImageBox = () => {
  const booksContext = useContext(BooksContext);
  const student = booksContext.studentsData;

  //Filter Achievers
  const topReaders = student.filter(
    (student) => student.number_of_books_read === 15
  );
  return (
    <div>
      <h4 className='center'>Featured Students</h4>
      {topReaders.map((student) => (
        <div key={student._id} className='card-panel z-depth-1'>
          <div className='row valign-wrapper'>
            <div className='col s4'>
              <img
                src={student.image}
                alt=''
                className='circle responsive-img'
              />
            </div>
            <div className='col s7'>
              <span className='black-text'>
                {student.first_name} {''} {student.last_name} from{' '}
                {student.school} completed the NY Times Reading Challenge by
                reading {student.favorite_Book}.
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CircularImageBox;
