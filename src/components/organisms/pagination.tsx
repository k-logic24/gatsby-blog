import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import { AppProps } from '@/types'

interface LiProps {
  pages: number
  current: boolean
  path: string
}

const Li: React.FC<LiProps> = ({ pages, current, path }) => {
  if (current) {
    return (
      <li><span>{pages}</span></li>
    )
  } else {
    return (
      <li><Link to={path}>{pages}</Link></li>
    )
  }
}

const Pagination: React.FC<AppProps['pagination']> = ({
  isFirst,
  isLast,
  currentPage,
  type,
  pages,
}) => {
  return (
    <nav className="relative w-full pagination">
      <ul className="pagination-list">
        {!isFirst && (
          <li className="pagination-list__item absolute left-0 top-0">
            <Link
              className="hover:opacity-60 transition-opacity duration-300 tracking-wider pagination__link"
              to={
                currentPage === 2 ? `/${type}/` : `/${type}/${currentPage! - 1}`
              }
              rel="prev"
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="transition-transform duration-300 text-sm pagination__icon prev"
              />
              <span style={{ marginLeft: '0.5em' }}>Prev</span>
            </Link>
          </li>
        )}
        <li className="absolute left-2/4 top-0 transform -translate-x-1/2">
          page {currentPage} / {pages}
        </li>
        {!isLast && (
          <li className="pagination-list__item absolute right-0 top-0">
            <Link
              to={`/${type}/${currentPage! + 1}/`}
              className="hover:opacity-60 transition-opacity duration-300 tracking-wider pagination__link"
              rel="next"
            >
              <span style={{ marginRight: '0.5em' }}>Next</span>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="transition-transform duration-300 text-sm pagination__icon next"
              />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Pagination
