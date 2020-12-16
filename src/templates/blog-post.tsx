import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import Layout from '@/layouts/default'
import Seo from '@/components/seo'

interface BlogPostProps {
  data: GatsbyTypes.BlogPostBySlugQuery
  pageContext: {
    previous: GatsbyTypes.MarkdownRemarkEdge['previous']
    next: GatsbyTypes.MarkdownRemarkEdge['next']
  }
}

const BlogPostTemplate: React.FC<BlogPostProps> = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const postTitle = post?.frontmatter?.title
  const postDate = post?.frontmatter?.date
  const src = post?.frontmatter?.hero?.childImageSharp?.fluid
  const tableOfContents = post?.tableOfContents || ''
  const { previous, next } = pageContext

  return (
    <Layout title={postTitle} date={postDate} isText={false}>
      <Seo
        title={post?.frontmatter?.title}
        description={post?.frontmatter?.description || post?.excerpt}
      />
      <article
        className="max-w-screen-md mx-auto blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <div className="mb-6">
          <h1 className="font-bold text-xl md:text-2xl blog-post__ttl">
            {postTitle}
          </h1>
          <span className="text-xs text-secondary">{postDate}</span>
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
          dangerouslySetInnerHTML={{ __html: post?.html as string }}
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
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        hero {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      tableOfContents(
        absolute: false
        pathToSlugField: "frontmatter.path"
        maxDepth: 3
      )
    }
  }
`
