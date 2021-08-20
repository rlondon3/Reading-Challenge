import React, { useContext } from 'react';
import BooksContext from '../ContextApi/BooksContext';

const SliderImages = () => {
  const booksContext = useContext(BooksContext);
  const student = booksContext.studentsData;

  //Filter Achievers
  const nytAchievers = student.filter(
    (student) =>
      student.number_of_books_read > 10 && student.number_of_books_read < 15
  );

  return (
    <ul className='slides'>
      {nytAchievers.map((student) => (
        <li key={student.first_name}>
          <img src={student.image} alt='' />
          <div className='caption center-align'>
            <h3 style={{ textShadow: '1px 1px 1px black' }}>
              NY Times Reading Challenger {student.first_name}{' '}
              {student.last_name}
            </h3>
            <h5 style={{ textShadow: '1px 1px 1px black' }}>
              has read {student.number_of_books_read} books from the best-seller
              list.
            </h5>
            <h5 style={{ textShadow: '1px 1px 1px black' }}>
              {student.first_name} is currently reading {''}
              {student.currently_reading}.
            </h5>
            <h5 style={{ textShadow: '1px 1px 1px black' }}>
              {' '}
              <br></br>
              <br></br>
              Favorite Book: {student.favorite_Book}
            </h5>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default SliderImages;
