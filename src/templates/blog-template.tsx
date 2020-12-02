import React from 'react'
import { Link, graphql } from 'gatsby'
import { PageProps } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

// TODO
const BlogIndex: React.FC<
  PageProps<GatsbyTypes.BlogPageQuery> & { pageContext: any }
> = ({ data, location, pageContext }) => {
  const siteTitle = data.site?.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <p>No posts...</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h1>Daily List</h1>
      <ol className="posts-list" style={{ listStyle: `none` }}>
        {/*TODO*/}
        {posts.map((post: any) => {
          const title = post.frontmatter?.title || post.fields?.slug

          return (
            <li key={post.fields!.slug!}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields!.slug!} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter!.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter!.description || post.excerpt!,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
      <nav className="paginate">
        <ul className="paginate-list">
          {!pageContext.isFirst && (
            <li className="prev">
              <Link
                to={
                  pageContext.currentPage === 2
                    ? `/blog/`
                    : `/blog/${pageContext.currentPage - 1}`
                }
                rel="prev"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
                <span style={{ marginLeft: '0.5em' }}>Prev</span>
              </Link>
            </li>
          )}
          {!pageContext.isLast && (
            <li className="next">
              <Link to={`/blog/${pageContext.currentPage + 1}/`} rel="next">
                <span style={{ marginRight: '0.5em' }}>Next</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogPage($limit: Int!, $skip: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
