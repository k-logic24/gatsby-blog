import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header className="bg-gray-800">
      <div className="py-4 flex justify-between container">
        <Link to="/" className="text-white">
          Iwata's Diary
        </Link>
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
}

export default Header
