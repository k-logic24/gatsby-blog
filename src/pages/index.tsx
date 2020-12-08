import React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '@/layouts/default'
import Item from '@/components/item'
import Seo from '@/components/seo'

const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
}) => {
  const siteTitle = data.site?.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const limit = 6

  return (
    <Layout title={siteTitle}>
      <Seo title="Home" />
      <section className="section home">
        <div className="text-center">
          <h1 className="pb-6 md:pb-12 mb-6 md:mb-8 section__ttl">Recently</h1>
        </div>
        {posts.length ? (
          <>
            <ul className="daily-list">
              {posts.map(post => (
                <Item
                  key={post.fields!.slug!}
                  title={post.frontmatter?.title || post.fields?.slug}
                  src={post?.frontmatter?.hero?.childImageSharp?.fluid}
                  slug={post.fields?.slug}
                  date={post.frontmatter!.date}
                />
              ))}
            </ul>
            {posts.length >= limit && (
              <div className="py-6 text-center">
                <Link to="/blog">もっとみる</Link>
              </div>
            )}
          </>
        ) : (
          <p>no posts...</p>
        )}
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 6
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
