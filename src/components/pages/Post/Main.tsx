import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import Image from 'gatsby-image'

import Layouts from '@/layouts/layouts'
import { BlogPostProps } from '@/types'

const Main: React.FC<BlogPostProps> = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const html = post?.html
  const title = post?.frontmatter?.title
  const date = post?.frontmatter?.date
  const originSrc = post?.frontmatter?.hero?.childImageSharp?.sizes?.src
  const srcset = post?.frontmatter?.hero?.childImageSharp?.fluid
  const tableOfContents = post?.tableOfContents || ''
  const { previous, next } = pageContext

  return (
    <Layouts
      seoTitle={post?.frontmatter?.title}
      seoDescription={post?.frontmatter?.description || post?.excerpt}
      seoImage={originSrc}
      isText={false}
    >
      <article
        className="max-w-screen-md mx-auto blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <div className="js-fadeUpPost mb-6">
          <h1 className="font-bold text-xl md:text-2xl blog-post__ttl">
            {title}
          </h1>
          <span className="text-xs text-secondary">{date}</span>
        </div>
        <div className="js-fadeUpPost mb-8">
          <Image fluid={srcset!} alt="" />
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
        <nav className="hidden md:block pt-12 pagination">
          <ul className="flex justify-between">
            <li className="md:w-1/3">
              {previous && (
                <Link
                  to={`/blog${previous?.fields?.slug}`}
                  rel="prev"
                  className="inline-block pagination__link"
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="transition-transform duration-300 pagination__icon prev"
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
                  className="inline-block pagination__link"
                >
                  <span style={{ marginRight: '0.5em' }}>
                    {next?.frontmatter?.title}
                  </span>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="transition-transform duration-300 pagination__icon next"
                  />
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </article>
    </Layouts>
  )
}

export default Main
