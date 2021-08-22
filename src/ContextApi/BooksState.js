import React, { useReducer, useContext } from 'react';
import BooksContext from './BooksContext';
import BooksReducer from './BooksReducer';
import axios from 'axios';
import { GET_BOOKS, SET_PAGE, GET_BOOK } from './types';
import { getStudents } from '../FakeClassServer/FakeClassListAPI';

const BooksState = (props) => {
  const initialState = {
    books: [],
    book: {},
    book_image: [],
    students: { first_name: '', last_name: '', school: '', grade: '' },
    currentPage: 1,
    pageSize: 3,
  };

  let nytimesApikey;

  if (process.env.NODE_ENV !== 'prodution') {
    nytimesApikey = process.env.REACT_APP_NYTIMES_CLIENT_KEY;
  } else {
    nytimesApikey = process.env.NYTIMES_CLIENT_KEY;
  }

  const [state, dispatch] = useReducer(BooksReducer, initialState);

  //On Page Change
  const handlePage = (page) => dispatch({ type: SET_PAGE, payload: page });

  //Get Students
  const studentsData = getStudents();

  //Get Books
  const useBooks = () => {
    const { state, dispatch } = useContext(BooksContext);
    return [state, dispatch];
  };

  const getBooks = async () => {
    const res = await axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${nytimesApikey}`
    );
    dispatch({
      type: GET_BOOKS,
      payload: res.data.results.books,
    });
  };

  const getRandomBook = async () => {
    const res = await axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${nytimesApikey}`
    );

    //One Book
    const randomBook =
      res.data.results.books[
        (res.data.results.books.length * Math.random()) | 0
      ];

    dispatch({
      type: GET_BOOK,
      payload: randomBook,
    });
  };

  return (
    <BooksContext.Provider
      value={{
        books: state.books,
        book_image: state.book_image,
        book: state.book,
        currentPage: state.currentPage,
        pageSize: state.pageSize,
        studentsData,
        handlePage,
        useBooks,
        getBooks,
        getRandomBook,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksState;
