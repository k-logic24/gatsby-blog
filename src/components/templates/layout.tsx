import React from 'react'

import Header from '@/components/organisms/header'
import Footer from '@/components/organisms/footer'
import Fv from '@/components/organisms/fv'

import { AppProps } from '@/types'

const Layout: React.FC<AppProps['layouts']> = ({
  title,
  children,
  date,
  isText,
}) => {
  return (
    <div className="wrapper">
      <Header />
      <Fv title={title} date={date} isText={isText} />
      <main className="py-8 md:py-12 px-4 mx-auto max-w-screen-lg">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
