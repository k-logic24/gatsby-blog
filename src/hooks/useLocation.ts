import { useEffect, useState } from 'react'

export const useLocation = (): string[] => {
  const [path, setPath] = useState<string>('')

  useEffect(() => {
    setPath(location.pathname)
  }, [path])

  return [path]
}
