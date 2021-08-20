import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <ul className='pagination center'>
      {pages.map((page) => (
        <li
          key={page}
          className={page === currentPage ? 'active' : 'lighten-3'}
          onClick={() => onPageChange(page)}
        >
          <a href='#!'>{page}</a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
