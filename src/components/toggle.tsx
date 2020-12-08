import React, { useEffect } from 'react'
import clsx from 'clsx'

import { AppProps } from '@/types'

const Toggle: React.FC<AppProps['toggle']> = ({ theme, toggleTheme }) => {
  const themeClass = clsx('toggle__label', theme === 'light' ? 'light' : 'dark')

  return (
    <div className="toggle">
      <input
        id="theme-toggle"
        type="checkbox"
        className="toggle__input"
        onChange={toggleTheme}
      />
      <label htmlFor="theme-toggle" className={themeClass}></label>
    </div>
  )
}

export default Toggle
