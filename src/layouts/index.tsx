import React from 'react'
import { Link } from 'gatsby'
import { PageProps } from 'gatsby'
import { WindowLocation } from '@reach/router'

import Header from '@/layouts/Header'
import Bio from '@/components/bio'

const Index: React.FC<
  { title: string } & { location: WindowLocation<unknown> }
> = ({ location, title, children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="py-8">
        <div className="container">{children}</div>
      </main>
      <footer>
        <Bio />
        &copy; {new Date().getFullYear()} K.Iwata
      </footer>
    </div>
  )
}

export default Index
