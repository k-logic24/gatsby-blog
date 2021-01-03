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
          <ul className="flex">
            <li className="mr-4">
              <Link to="/book" className="text-white text-lg md:text-base">
                <span className="hidden lg:inline-block">book</span>
                <span className="lg:hidden" aria-label="book">
                  <FontAwesomeIcon icon={faBook} aria-hidden="true" />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-white text-lg md:text-base">
                <span className="hidden lg:inline-block">blog</span>
                <span className="lg:hidden" aria-label="blog">
                  <FontAwesomeIcon icon={faPen} aria-hidden="true" />
                </span>
              </Link>
            </li>
            <li className="ml-8">
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
