import React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import Image from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import Bio from '@/components/Bio'
import Layout from '@/layouts/default'
import Seo from '@/components/seo'
import Item from '@/components/blog/item'

const BlogIndex: React.FC<
  PageProps<GatsbyTypes.BlogPageQuery> & {
    pageContext: GatsbyTypes.SitePageContext
  }
> = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout title="BLOG">
        <Seo title="BLOG" />
        <p>No posts...</p>
      </Layout>
    )
  }

  return (
    <Layout title="BLOG">
      <Seo title="BLOG" />
      <section className="section blog">
        <div className="text-center">
          <h1 className="pb-4 mb-10 section__ttl">All Posts</h1>
        </div>
        <ul className="blog-list">
          {posts.map(post => {
            const title = post.frontmatter?.title || post.fields?.slug

            return (
              <Item
                key={post.fields!.slug!}
                title={title}
                src={post?.frontmatter?.hero?.childImageSharp?.fluid}
                slug={post.fields?.slug}
                date={post.frontmatter?.date}
                tags={post.frontmatter?.tags}
              />
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          title
          description
          hero {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          tags
        }
      }
    }
  }
`
