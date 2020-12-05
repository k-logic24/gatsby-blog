import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { PageProps } from 'gatsby'

import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import Bio from '@/components/bio'

const Default: React.FC<{ title: string }> = ({ title, children }) => {
  const [path, setPath] = useState<string>('')
  useEffect(() => {
    setPath(location.pathname)
  }, [])
  return (
    <div className="wrapper">
      <Header path={path} />
      <main className="py-8 md:py-12 px-4 mx-auto max-w-screen-lg">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Default
