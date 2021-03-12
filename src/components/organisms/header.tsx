import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Toggle from '@/components/molecules/toggle'
import { useDarkMode } from '@/hooks/useDarkMode'
import { navs } from '@/constants'
import { AppProps } from '@/@types'

const Header: React.FC = () => {
  const [theme, toggleTheme] = useDarkMode()

  return (
    <header className="header">
      <div className="flex justify-between items-center lg:block relative h-full container">
        <Link
          to="/"
          className="text-white lg:absolute lg:left-1/2 lg:top-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2"
        >
          Iwata&apos;s BLOG
        </Link>
        <nav className="lg:absolute lg:right-4 lg:top-1/2 lg:transform lg:-translate-y-1/2">
          <ul className="flex items-center">
            {navs.map((nav, idx) => (
              <li key={idx} className={nav.margin ? nav.margin : ''}>
                <Link
                  to={nav.path}
                  className="tooltip-trigger text-white p-2 text-lg relative"
                >
                  <FontAwesomeIcon icon={nav.icon} aria-hidden="true" />
                  <div
                    className="header-nav__tooltip"
                    role="tooltip"
                    aria-hidden="true"
                  >
                    {nav.txt}
                  </div>
                </Link>
              </li>
            ))}
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
