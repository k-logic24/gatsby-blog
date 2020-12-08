import React from 'react'
import { Link, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import Bio from '@/components/bio'
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
  const siteTitle = data.site?.siteMetadata?.title || `Title`
  const { previous, next } = pageContext

  return (
    <Layout title={post?.frontmatter?.title} date={post?.frontmatter?.date}>
      <Seo
        title={post?.frontmatter?.title}
        description={post?.frontmatter?.description || post?.excerpt}
      />
      <article
        className="max-w-screen-sm mx-auto blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <section
          dangerouslySetInnerHTML={{ __html: post?.html as string }}
          itemProp="articleBody"
        />
        <nav className="hidden md:block pt-12 paginate">
          <ul className="flex justify-between">
            <li>
              {previous && (
                <Link to={previous?.fields?.slug!} rel="prev">
                  <FontAwesomeIcon icon={faChevronLeft} />
                  <span style={{ marginLeft: '0.5em' }}>
                    {previous?.frontmatter?.title}
                  </span>
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next?.fields?.slug!} rel="next">
                  <span style={{ marginRight: '0.5em' }}>
                    {next?.frontmatter?.title}
                  </span>
                  <FontAwesomeIcon icon={faChevronRight} />
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
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
