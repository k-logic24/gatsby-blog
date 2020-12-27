import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import { AppProps } from '@/types'

const Toggle: React.FC<AppProps['toggle']> = ({ theme, toggleTheme }) => {
  const icon =
    theme === 'light' ? (
      <FontAwesomeIcon icon={faMoon} aria-hidden="true" />
    ) : (
      <FontAwesomeIcon icon={faSun} className="text-white" aria-hidden="true" />
    )

  return (
    <button
      type="button"
      className={'text-lg md:text-base text-white'}
      onClick={toggleTheme}
      aria-label="テーマを変更"
    >
      <span className={'hidden md:inline-block mr-2'}>THEME</span>
      {icon}
    </button>
  )
}

export default Toggle
