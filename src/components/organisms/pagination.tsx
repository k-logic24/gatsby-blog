import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import { AppProps } from '@/types'

interface LiProps {
  num: number
  isCurrent: boolean
  path: string
}

interface PrevProps {
  current: number
  type: string
}

interface NextProps {
  current: number
  type: string
  pages: number
}

const Li: React.FC<LiProps> = ({ num, isCurrent, path }) => {
  if (isCurrent) {
    return (
      <li><span>{num}</span></li>
    )
  } else {
    return (
      <li><Link to={path}>{num}</Link></li>
    )
  }
}

const Prev: React.FC<PrevProps> = ({ type, current }) => {
  if (current === 1) {
    return (
      <li className="disable"><span>Newer</span></li>
    )
  }
  if (current === 2) {
    return (
			<li><Link to={`/${type}/`}>Newer</Link></li>
		)
  }

  return (
    <li>
      <Link to={`/${type}/${current - 1}/`}>Newer</Link>
    </li>
  )
}

const Next: React.FC<NextProps> = ({ type, current, pages }) => {
  if (current === pages) {
    return (
      <li className="disable"><span>Older</span></li>
    )
  }

  return (
    <li className="c-pager--archive__next">
      <Link to={`/${type}/${current + 1}/`}>Older</Link>
    </li>
  )
}

const Skip: React.FC<{ isShow: boolean }> = ({ isShow }) => {
  return (
    isShow ? <li>...</li> : <></>
  )
}

const Pagination: React.FC<AppProps['pagination']> = ({
  isFirst,
  isLast,
  currentPage,
  type,
  pages,
}) => {
  const array: number[] = []
  for (let index = 1; index <= pages; index++) {
    array.push(index)
  }

  if (pages < 6) {
    return (
      <ul className="pagination-list">
        <Prev current={currentPage} type={type} />
        { (array || []).map(i => (
          i === 1
            ? <Li
                num={i}
                isCurrent={currentPage === i}
                path={`/${type}/`}
              />
            : <Li
                num={i}
                isCurrent={currentPage === i}
                path={`/${type}/${i}`}
              />
          ))
        }
        <Next current={currentPage} type={type} pages={pages} />
      </ul>
    )
  } else {
    if (pages >= 8) {
      if (currentPage <= 3 ||  currentPage === 1) {
        array.length = 0
				for (let index = 1; index <= 5; index++) {
					array.push(index)
        }

        return (
          <ul className="pagination-list">
            <Prev current={currentPage} type={type} />
            { (array || []).map(i => (
              i === 1
                ? <Li
                    num={i}
                    isCurrent={currentPage === i}
                    path={`/${type}/`}
                  />
                : <Li
                    num={i}
                    isCurrent={currentPage === i}
                    path={`/${type}/${i}`}
                  />
              ))
            }
            <li>...</li>
            <li>
              <Link to={`/${type}/${pages}/`}>{pages}</Link>
            </li>
            <Next current={currentPage} type={type} pages={pages} />
          </ul>
        )
      } else if (currentPage >= pages - 3) {
        array.length = 0
				for (let index = pages - 4; index <= pages; index++) {
					array.push(index)
        }

        return (
          <ul className="pagination-list">
            <Prev current={currentPage} type={type} />
            <li><Link to={`/${type}`}>1</Link></li>
            <li>...</li>
            { (array || []).map(i => (
              i === 1
                ? <Li
                    num={i}
                    isCurrent={currentPage === i}
                    path={`/${type}/`}
                  />
                : <Li
                    num={i}
                    isCurrent={currentPage === i}
                    path={`/${type}/${i}`}
                  />
              ))
            }
            <Next current={currentPage} type={type} pages={pages} />
          </ul>
        )
      } else {
        array.length = 0
				for (let index = currentPage - 1; index <= currentPage + 2; index++) {
					array.push(index)
        }

        return (
          <ul className="pagination-list">
            <Prev current={currentPage} type={type} />
            <li><Link to={`/${type}`}>1</Link></li>
            <Skip isShow={currentPage !== pages + (currentPage - 3)} />
            { (array || []).map(i => (
              <Li
                num={i}
                isCurrent={currentPage === i}
                path={`/${type}/`}
              />
            ))}
            <Skip isShow={currentPage !== pages + (currentPage + 3)} />
            <li><Link to={`/${type}/${pages}/`}>{pages}</Link></li>
            <Next current={currentPage} type={type} pages={pages} />
          </ul>
        )
      }
    }
    return (
      <></>
    )
  }

  // return (
  //   <nav className="relative w-full pagination">
  //     <ul className="pagination-list">

  //       {!isFirst && (
  //         <li className="pagination-list__item absolute left-0 top-0">
  //           <Link
  //             className="hover:opacity-60 transition-opacity duration-300 tracking-wider pagination__link"
  //             to={
  //               currentPage === 2 ? `/${type}/` : `/${type}/${currentPage! - 1}`
  //             }
  //             rel="prev"
  //           >
  //             <FontAwesomeIcon
  //               icon={faChevronLeft}
  //               className="transition-transform duration-300 text-sm pagination__icon prev"
  //             />
  //             <span style={{ marginLeft: '0.5em' }}>Prev</span>
  //           </Link>
  //         </li>
  //       )}
  //       <li className="absolute left-2/4 top-0 transform -translate-x-1/2">
  //         page {currentPage} / {pages}
  //       </li>
  //       {!isLast && (
  //         <li className="pagination-list__item absolute right-0 top-0">
  //           <Link
  //             to={`/${type}/${currentPage! + 1}/`}
  //             className="hover:opacity-60 transition-opacity duration-300 tracking-wider pagination__link"
  //             rel="next"
  //           >
  //             <span style={{ marginRight: '0.5em' }}>Next</span>
  //             <FontAwesomeIcon
  //               icon={faChevronRight}
  //               className="transition-transform duration-300 text-sm pagination__icon next"
  //             />
  //           </Link>
  //         </li>
  //       )}
  //     </ul>
  //   </nav>
  // )
}

export default Pagination
