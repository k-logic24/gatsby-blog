import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

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
            <li>
              <Link to="/blog" className="text-white text-lg md:text-base">
                <span className={'hidden md:inline-block mr-2'}>BLOG</span>
                <FontAwesomeIcon icon={faPen} aria-hidden="true" />
              </Link>
            </li>
            <li className="ml-4 md:ml-8">
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
