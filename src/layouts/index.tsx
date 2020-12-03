import React from 'react'
import { Link } from 'gatsby'
import { PageProps } from 'gatsby'
import { WindowLocation } from '@reach/router'

import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import Bio from '@/components/bio'

const Index: React.FC<
  { title: string } & { location: WindowLocation<unknown> }
> = ({ title, children }) => {
  return (
    <div className="wrapper">
      <Header path={location.pathname} />
      <main className="py-8 md:py-12 mx-auto max-w-screen-md">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default Index
