import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faBook } from '@fortawesome/free-solid-svg-icons'

import Toggle from '@/components/molecules/toggle'
import { useDarkMode } from '@/hooks/useDarkMode'
import { AppProps } from '@/types'

const Header: React.FC = () => {
  const [theme, toggleTheme] = useDarkMode()

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-gray-light opacity-90 h-12 shadow">
      <div className="flex justify-between items-center lg:block relative h-full container">
        <Link to="/" className="text-white lg:absolute lg:left-1/2 lg:top-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
          Iwata&apos;s BLOG
        </Link>
        <nav className="lg:absolute lg:right-4 lg:top-1/2 lg:transform lg:-translate-y-1/2">
          <ul className="flex items-center">
            <li>
              <Link to="/book" className="tooltip-trigger text-white p-2 text-lg relative">
                <FontAwesomeIcon icon={faBook} aria-hidden="true" />
                <div
                  className="header-nav__tooltip"
                  role="tooltip"
                  aria-hidden="true"
                >
                  読んだ本を紹介していきます。
                </div>
              </Link>
            </li>
            <li className="ml-2">
              <Link to="/blog" className="tooltip-trigger text-white p-2 text-lg relative">
                <FontAwesomeIcon icon={faPen} aria-hidden="true" />
                <div
                  className="header-nav__tooltip"
                  role="tooltip"
                  aria-hidden="true"
                >
                  ブログ一覧ページです。
                </div>
              </Link>
            </li>
            <li className="ml-4">
              <Toggle
                theme={theme as AppProps['toggle']['theme']}
                toggleTheme={toggleTheme as AppProps['toggle']['toggleTheme']}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
