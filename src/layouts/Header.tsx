import React, { useState, useEffect, memo } from 'react'
import { Link } from 'gatsby'

const Header: React.FC<{ path: string }> = memo(({ path }) => {
  let header

  if (path === '/') {
    header = (
      <h1>
        <Link to="/" className="text-white">
          Iwata's Diary
        </Link>
      </h1>
    )
  } else {
    header = (
      <Link to="/" className="text-white">
        Iwata's Diary
      </Link>
    )
  }

  return (
    <header className="bg-blue-400">
      <div className="py-4 flex justify-between container">
        {header}
        <nav>
          <ul className="flex">
            <li>
              <Link to="/blog" className="text-white anim-link">
                diary
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
})

export default Header
