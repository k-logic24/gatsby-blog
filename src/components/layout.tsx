import React from 'react'
import { Link } from 'gatsby'
import { PageProps } from 'gatsby'
import { WindowLocation } from '@reach/router'

import Bio from '../components/bio'

const Layout: React.FC<
  { title: string } & { location: WindowLocation<unknown> }
> = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="wrapper" data-is-root-path={isRootPath}>
      <header className="header">{header}</header>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link to="/blog/">Dialy</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer>
        <Bio />
        &copy; {new Date().getFullYear()} K.Iwata
      </footer>
    </div>
  )
}

export default Layout
