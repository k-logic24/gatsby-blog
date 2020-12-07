import React, { useEffect, useState } from 'react'
import { Link, PageProps } from 'gatsby'

import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import Fv from '@/layouts/Fv'
import Bio from '@/components/bio'

import { AppProps } from '@/types'

const Default: React.FC<AppProps['layouts']> = ({ title, children, date }) => {
  // const [path, setPath] = useState<string>('')
  // useEffect(() => {
  //   setPath(location.pathname)
  // }, [])

  return (
    <div className="wrapper">
      <Header />
      <Fv title={title} date={date} />
      <main className="py-8 md:py-12 px-4 mx-auto max-w-screen-lg">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Default
