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
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="text-white header__logo">
          Iwata&apos;s BLOG
        </Link>
        <nav className="header-nav">
          <ul className="flex items-center">
            <li>
              <Link to="/book" className="tooltip-trigger header-nav__link">
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
              <Link to="/blog" className="tooltip-trigger header-nav__link">
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
