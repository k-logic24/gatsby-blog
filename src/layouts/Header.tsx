import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

import Toggle from '@/components/Toggle'
import { useDarkMode } from '@/hooks/useDarkMode'
import { AppProps } from '@/types'

const Header: React.FC = () => {
  const [theme, toggleTheme] = useDarkMode()

  useEffect(() => {}, [])
  return (
    <header className="header">
      <div className="relative h-full container">
        <Link to="/" className="text-white pos-c-c">
          Iwata's Diary
        </Link>
        <nav className="pos-c-r">
          <ul className="flex">
            <li>
              <Link to="/blog" className="text-white">
                Diary
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
