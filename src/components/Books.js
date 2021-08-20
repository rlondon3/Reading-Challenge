import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CircularImageBox from '../common/CircularImageBox';
import Pagination from '../common/Pagination';
import BooksContext from '../ContextApi/BooksContext';
import paginate from './utils/paginate';

const Books = () => {
  const booksContext = useContext(BooksContext);

  const getBookHandler = () => {
    booksContext.getBooks();
  };

  //GetBook Info
  useEffect(() => {
    getBookHandler();
    // eslint-disable-next-line
  }, []);

  //Number of Books and Pagination
  const count = booksContext.books.length;
  if (count === 0)
    return (
      <div className='progress' id='progress'>
        <div className='indeterminate'></div>
      </div>
    );
  const books = paginate(
    booksContext.books,
    booksContext.currentPage,
    booksContext.pageSize
  );
  return (
    <div className=''>
      <h2 className='center'>
        <i className='large material-icons'>local_library</i> {count}{' '}
        Bestsellers
      </h2>
      <div className='row'>
        <div className='col s4 hide-on-med-and-down'>
          <CircularImageBox />
          <span
            className='hide-on-small-only'
            style={{
              fontWeight: 700,
              color: 'rgba(135, 133, 250, 0.781)',
              textShadow: '1px 1px 0px black',
            }}
          ></span>
        </div>
        <table className='col s8 highlight' id='table'>
          <thead>
            <tr>
              <th>Book</th>
              <th>Title</th>
              <th>Author</th>
              <th>Summary</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody className='z-depth-4'>
            {books.map((books) => (
              <tr key={books.title}>
                <td>
                  <img
                    src={books.book_image}
                    alt=''
                    style={{ width: '80px' }}
                  ></img>
                </td>
                <td>{books.title}</td>
                <td>{books.author}</td>
                <td>{books.description}</td>
                <td>{books.rank}</td>
                <td></td>
                <td>
                  <Link
                    to='/readinglog'
                    className='waves-effect waves-light btn'
                  >
                    <i className='material-icons right'>rate_review</i>Log Notes
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        itemsCount={count}
        pageSize={booksContext.pageSize}
        currentPage={booksContext.currentPage}
        onPageChange={booksContext.handlePage}
      />
    </div>
  );
};

export default Books;
