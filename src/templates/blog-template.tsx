import React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import Image from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import Bio from '@/components/bio'
import Layout from '@/layouts/default'
import Seo from '@/components/seo'

// TODO
const BlogIndex: React.FC<
  PageProps<GatsbyTypes.BlogPageQuery> & {
    pageContext: GatsbyTypes.SitePageContext
  }
> = ({ data, pageContext }) => {
  const siteTitle = data.site?.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout title={siteTitle}>
        <Seo title="All posts" />
        <p>No posts...</p>
      </Layout>
    )
  }

  return (
    <Layout title={siteTitle}>
      <Seo title="All posts" />
      <section className="section daily">
        <div className="text-center">
          <h1 className="pb-6 md:pb-12 mb-6 md:mb-8 section__ttl">
            Daily List
          </h1>
        </div>
        <ul className="daily-list">
          {posts.map(post => {
            const title = post.frontmatter?.title || post.fields?.slug

            return (
              <li key={post.fields!.slug!}>
                <article itemScope itemType="http://schema.org/Article">
                  <figure>
                    <Link to={post.fields!.slug!} itemProp="url">
                      <Image
                        fluid={
                          post?.frontmatter?.hero?.childImageSharp?.fluid as any
                        }
                        alt=""
                      />
                    </Link>
                  </figure>
                  <h2 className="daily__ttl">
                    <Link to={post.fields!.slug!} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <span className="text-xs text-gray-400">
                    {post.frontmatter!.date}
                  </span>
                </article>
              </li>
            )
          })}
        </ul>
        <nav className="paginate">
          <ul className="paginate-list">
            {!pageContext.isFirst && (
              <li className="prev">
                <Link
                  to={
                    pageContext.currentPage === 2
                      ? `/blog/`
                      : `/blog/${pageContext.currentPage! - 1}`
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
                <Link to={`/blog/${pageContext.currentPage! + 1}/`} rel="next">
                  <span style={{ marginRight: '0.5em' }}>Next</span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </section>
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
          hero {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
