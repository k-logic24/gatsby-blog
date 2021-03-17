import React from 'react'
import { Link } from 'gatsby'
import { Disqus } from 'gatsby-plugin-disqus'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { GatsbyImage } from 'gatsby-plugin-image'

import Ads from '@/components/shared/ads'
import Fv from '@/components/organisms/fv'
import Seo from '@/components/shared/seo'
import Layouts from '@/layouts/layouts'
import { BlogPostProps } from '@/@types'
import rehypeReact from 'rehype-react'

// todo
// @ts-ignore
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    adsense: Ads,
  },
}).Compiler

const Main: React.FC<BlogPostProps> = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const title = post?.frontmatter?.title
  const date = post?.frontmatter?.date
  const originSrc = post?.frontmatter?.hero?.childImageSharp?.original?.src
  const srcset = post?.frontmatter?.hero?.childImageSharp?.gatsbyImageData
  const tableOfContents = post?.tableOfContents || ''
  const { previous, next } = pageContext

  return (
    <Layouts>
      <Fv isText={false} assetName="post.jpg" />
      <Seo
        title={post?.frontmatter?.title}
        description={post?.frontmatter?.description || post?.excerpt}
        image={originSrc}
      />
      <main className="py-8 md:py-12 px-4 lg:px-0 mx-auto max-w-screen-lg">
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
            <GatsbyImage image={srcset!} alt="" />
          </div>
          <Ads />
          {tableOfContents && (
            <div
              className="toc"
              dangerouslySetInnerHTML={{ __html: tableOfContents }}
            ></div>
          )}
          <div className="blog-post-contents" itemProp="articleBody">
            {renderAst(post?.htmlAst)}
          </div>
          <nav className="hidden md:block pt-12 pagination">
            <ul className="flex justify-between">
              <li className="md:w-1/3">
                {previous && (
                  <Link
                    to={`${previous?.fields?.slug}`}
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
                    to={`${next?.fields?.slug}`}
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
          <div className="mt-8">
            <Disqus
              config={{
                url: `https://k-blog.life${post?.fields?.slug}`,
                identifier: post?.id,
                title: title,
              }}
            />
          </div>
        </article>
      </main>
    </Layouts>
  )
}

export default Main
