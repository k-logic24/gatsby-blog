import { useEffect, useState } from 'react'

export const useLocation = () => {
  const [path, setPath] = useState<string>('')

  useEffect(() => {
    setPath(location.pathname)
    console.log(location.pathname)
  }, [path])

  return [path]
}
