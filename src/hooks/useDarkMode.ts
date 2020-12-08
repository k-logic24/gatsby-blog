import { useEffect, useState } from 'react'

import { AppProps } from '@/types'

type ThemeProps = AppProps['toggle']['theme']

export const useDarkMode = () => {
  const [theme, setTheme] = useState<ThemeProps>('light')
  const setMode = (mode: ThemeProps) => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
    toggleClass(mode)
  }

  const toggleClass = (theme: ThemeProps) => {
    switch (theme) {
      case 'light':
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark')
        break
      case 'dark':
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
        break
      default:
        break
    }
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      toggleClass(theme)
      setMode('dark')
    } else {
      toggleClass(theme)
      setMode('light')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as ThemeProps
    console.log(localTheme)
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      !localTheme
    ) {
      setMode('dark')
      return
    }
    if (localTheme) {
      setMode(localTheme)
      return
    }
    setMode('light')
  }, ['theme'])

  return [theme, toggleTheme]
}
