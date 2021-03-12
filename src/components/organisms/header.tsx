import React from 'react'
import { Link } from 'gatsby'

import Toggle from '@/components/molecules/toggle'
import { useDarkMode } from '@/hooks/useDarkMode'
import { headerNavs } from '@/constants'
import { AppProps } from '@/@types'

const Header: React.FC = () => {
  const [theme, toggleTheme] = useDarkMode()

  return (
    <header className="header">
      <div className="py-1 px-4 lg:py-3 lg:px-0 flex justify-between items-center max-w-screen-lg mx-auto">
        <Link to="/" className="text-white">
          Iwata&apos;s BLOG
        </Link>
        <nav>
          <ul className="flex gap-x-1 items-center">
            {headerNavs.map(nav => (
              <li key={nav.txt}>
                <Link
                  to={nav.path}
                  className="text-white p-2 text-lg font-dosis anim-link"
                >
                  {nav.txt}
                </Link>
              </li>
            ))}
            <li className="ml-1 lg:ml-2">
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
