import React from 'react'
import { Link } from 'gatsby'

import Toggle from '@/components/toggle'
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
              <Link
                to="/blog"
                className="text-white anim-link text-sm md:text-base"
              >
                BLOG
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
