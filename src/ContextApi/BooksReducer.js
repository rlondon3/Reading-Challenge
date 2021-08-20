import {
  GET_BOOK,
  GET_IMAGE,
  GET_BOOKS,
  SET_PAGE,
  GET_STUDENTS,
} from './types';

const BooksReducer = (state, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case GET_BOOK:
      return {
        ...state,
        book: action.payload,
      };
    case GET_IMAGE:
      return {
        ...state,
        bookImage: action.payload,
      };
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };
    default:
      return state;
  }
};

export default BooksReducer;
