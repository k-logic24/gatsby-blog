import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import Header from '@/components/organisms/header'
import Footer from '@/components/organisms/footer'
import Fv from '@/components/organisms/fv'
import Seo from '@/components/shared/seo'
import Image from 'gatsby-image'

import { BlogPostProps } from '@/types'

const Main: React.FC<BlogPostProps> = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const html = post?.html
  const title = post?.frontmatter?.title
  const date = post?.frontmatter?.date
  const src = post?.frontmatter?.hero?.childImageSharp?.fluid
  const tableOfContents = post?.tableOfContents || ''
  const { previous, next } = pageContext

  return (
    <div className="wrapper">
      <Seo
        title={post?.frontmatter?.title}
        description={post?.frontmatter?.description || post?.excerpt}
      />
      <Header />
      <Fv isText={false} />
      <main className="py-8 md:py-12 px-4 mx-auto max-w-screen-lg">
        <article
          className="max-w-screen-md mx-auto blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <div className="mb-6">
            <h1 className="font-bold text-xl md:text-2xl blog-post__ttl">
              {title}
            </h1>
            <span className="text-xs text-secondary">{date}</span>
          </div>
          <div className="mb-8">
            <Image fluid={src!} alt="" />
          </div>
          {tableOfContents && (
            <div
              className="toc"
              dangerouslySetInnerHTML={{ __html: tableOfContents }}
            ></div>
          )}
          <section
            className="blog-post-contents"
            dangerouslySetInnerHTML={{ __html: html as string }}
            itemProp="articleBody"
          />
          <nav className="hidden md:block pt-12 paginate">
            <ul className="flex justify-between">
              <li className="md:w-1/3">
                {previous && (
                  <Link
                    to={`/blog${previous?.fields?.slug}`}
                    rel="prev"
                    className="pagination__link prev"
                  >
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      className="pagination__icon prev"
                    />
                    <span style={{ marginLeft: '0.5em' }}>
                      {previous?.frontmatter?.title}
                    </span>
                  </Link>
                )}
              </li>
              <li className="md:w-1/3">
                {next && (
                  <Link
                    to={`/blog${next?.fields?.slug}`}
                    rel="next"
                    className="pagination__link next"
                  >
                    <span style={{ marginRight: '0.5em' }}>
                      {next?.frontmatter?.title}
                    </span>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="pagination__icon next"
                    />
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default Main
