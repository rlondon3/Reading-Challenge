import React, { useContext } from 'react';
import BooksContext from '../ContextApi/BooksContext';

const CarouselImages = () => {
  const booksContext = useContext(BooksContext);

  //Filter Images
  const wksOnList = booksContext.books.filter(
    (books) => books.weeks_on_list > 5
  );

  return (
    <div>
      {wksOnList.map((books) => (
        <a href='#!' className='carousel-item' key={books.rank}>
          <img src={books.book_image} alt='' />
        </a>
      ))}
    </div>
  );
};
export default CarouselImages;
