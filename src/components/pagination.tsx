import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import { AppProps } from '@/types'

const Pagination: React.FC<AppProps['pagination']> = ({
  isFirst,
  isLast,
  currentPage,
  type,
  pages,
}) => {
  return (
    <nav className="pagination">
      <ul className="pagination-list">
        {!isFirst && (
          <li className="pagination-list__item prev">
            <Link
              className="pagination__link"
              to={
                currentPage === 2 ? `/${type}/` : `/${type}/${currentPage! - 1}`
              }
              rel="prev"
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="pagination__icon prev"
              />
              <span style={{ marginLeft: '0.5em' }}>Prev</span>
            </Link>
          </li>
        )}
        <li className="page-txt">
          page {currentPage} / {pages}
        </li>
        {!isLast && (
          <li className="pagination-list__item next">
            <Link
              to={`/${type}/${currentPage! + 1}/`}
              className="pagination__link"
              rel="next"
            >
              <span style={{ marginRight: '0.5em' }}>Next</span>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="pagination__icon next"
              />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Pagination
