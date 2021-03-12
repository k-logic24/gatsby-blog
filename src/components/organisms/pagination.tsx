import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import { AppProps } from '@/@types'

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
      <li>
        <span>{num}</span>
      </li>
    )
  }

  return (
    <li>
      <Link to={path}>{num}</Link>
    </li>
  )
}

const Prev: React.FC<PrevProps> = ({ type, current }) => {
  if (current === 1) return null
  if (current === 2) {
    return (
      <li className="pager-archive pager-archive--older">
        <Link to={`/${type}`}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="mr-2 pager-archive__icon"
          />
          Older
        </Link>
      </li>
    )
  }

  return (
    <li className="pager-archive pager-archive--older">
      <Link to={`/${type}/${current - 1}`}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="mr-2 pager-archive__icon"
        />
        Older
      </Link>
    </li>
  )
}

const Next: React.FC<NextProps> = ({ type, current, pages }) => {
  if (pages === current) return null
  return (
    <li className="pager-archive pager-archive--newer">
      <Link to={`/${type}/${current + 1}`}>
        Newer
        <FontAwesomeIcon
          icon={faChevronRight}
          className="ml-2 pager-archive__icon"
        />
      </Link>
    </li>
  )
}

const Skip: React.FC<{ isShow: boolean }> = ({ isShow }) => {
  return isShow ? <li className="pager-archive-dots">...</li> : <></>
}

const Pagination: React.FC<AppProps['pagination']> = ({
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
      <ul className="pager">
        <Prev current={currentPage} type={type} />
        {array.map(i =>
          i === 1 ? (
            <Li
              key={i}
              num={i}
              isCurrent={currentPage === i}
              path={`/${type}`}
            />
          ) : (
            <Li
              key={i}
              num={i}
              isCurrent={currentPage === i}
              path={`/${type}/${i}`}
            />
          )
        )}
        <Next current={currentPage} type={type} pages={pages} />
      </ul>
    )
  } else {
    if (pages >= 8) {
      if (currentPage <= 3 || currentPage === 1) {
        array.length = 0
        for (let index = 1; index <= 5; index++) {
          array.push(index)
        }

        return (
          <ul className="pager">
            <Prev current={currentPage} type={type} />
            {array.map(i =>
              i === 1 ? (
                <Li
                  key={i}
                  num={i}
                  isCurrent={currentPage === i}
                  path={`/${type}`}
                />
              ) : (
                <Li
                  key={i}
                  num={i}
                  isCurrent={currentPage === i}
                  path={`/${type}/${i}`}
                />
              )
            )}
            <li className="pager-archive-dots">...</li>
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
          <ul className="pager">
            <Prev current={currentPage} type={type} />
            <li>
              <Link to={`/${type}`}>1</Link>
            </li>
            <li className="pager-archive-dots">...</li>
            {array.map(i =>
              i === 1 ? (
                <Li
                  key={i}
                  num={i}
                  isCurrent={currentPage === i}
                  path={`/${type}`}
                />
              ) : (
                <Li
                  key={i}
                  num={i}
                  isCurrent={currentPage === i}
                  path={`/${type}/${i}`}
                />
              )
            )}
            <Next current={currentPage} type={type} pages={pages} />
          </ul>
        )
      } else {
        array.length = 0
        for (let index = currentPage - 1; index <= currentPage + 2; index++) {
          array.push(index)
        }

        return (
          <ul className="pager">
            <Prev current={currentPage} type={type} />
            <li>
              <Link to={`/${type}`}>1</Link>
            </li>
            <Skip isShow={currentPage !== pages + (currentPage - 3)} />
            {array.map(i => (
              <Li
                key={i}
                num={i}
                isCurrent={currentPage === i}
                path={`/${type}/${i}`}
              />
            ))}
            <Skip isShow={currentPage !== pages + (currentPage + 3)} />
            <li>
              <Link to={`/${type}/${pages}`}>{pages}</Link>
            </li>
            <Next current={currentPage} type={type} pages={pages} />
          </ul>
        )
      }
    }
    return null
  }
}

export default Pagination
