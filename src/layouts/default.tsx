import React, { useEffect, useState } from 'react'
import { Link, PageProps } from 'gatsby'

import Header from '@/layouts/header'
import Footer from '@/layouts/footer'
import Fv from '@/layouts/fv'
import Bio from '@/components/Bio'

import { AppProps } from '@/types'

const Default: React.FC<AppProps['layouts']> = ({
  title,
  children,
  date,
  isText,
}) => {
  return (
    <div className="wrapper">
      <Header />
      {/*<Fv title={title} date={date} isText={isText} />*/}
      <main className="py-8 md:py-12 px-4 mx-auto max-w-screen-lg">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Default
