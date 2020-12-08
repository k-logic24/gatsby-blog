import React, { useEffect } from 'react'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import { AppProps } from '@/types'

const Toggle: React.FC<AppProps['toggle']> = ({ theme, toggleTheme }) => {
  const icon =
    theme === 'light' ? (
      <FontAwesomeIcon icon={faMoon} className="text-white" />
    ) : (
      <FontAwesomeIcon icon={faSun} className="text-white" />
    )

  return (
    <button type="button" onClick={toggleTheme}>
      {icon}
    </button>
  )
}

export default Toggle
