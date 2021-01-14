import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import { AppProps } from '@/types'

const Toggle: React.FC<AppProps['toggle']> = ({ theme, toggleTheme }) => {
  const currentTheme = theme === 'light' ? 'ライト' : 'ダーク'
  const icon =
    theme === 'light' ? (
      <FontAwesomeIcon icon={faSun} aria-hidden="true" />
    ) : (
      <FontAwesomeIcon
        icon={faMoon}
        className="text-white"
        aria-hidden="true"
      />
    )

  return (
    <button
      type="button"
      className="text-lg text-white p-2 relative tooltip-trigger"
      onClick={toggleTheme}
      title="テーマを変更"
    >
      {icon}
      <div className="header-nav__tooltip" role="tooltip" aria-hidden="true">
        テーマを変更します。
        <br />
        現在は{currentTheme}です。
      </div>
    </button>
  )
}

export default Toggle
