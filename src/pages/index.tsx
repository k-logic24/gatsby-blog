import React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '@/layouts/default'
import Item from '@/components/item'
import Seo from '@/components/seo'
import Search from '@/components/search'

const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
}) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout title="Hi!Dear">
      <Seo title="Home" />
      <div className="section home">
        <div className="section-wrap">
          <div className="text-center">
            <h1 className="pb-4 mb-10 section__ttl">Latest</h1>
          </div>
          {posts.length ? (
            <>
              <ul className="blog-list">
                {posts.map(post => (
                  <Item
                    key={post.fields!.slug!}
                    title={post.frontmatter?.title || post.fields?.slug}
                    src={post?.frontmatter?.hero?.childImageSharp?.fluid}
                    slug={post.fields?.slug}
                    date={post.frontmatter!.date}
                    tags={post.frontmatter?.tags}
                  />
                ))}
              </ul>
              <div className="pt-8 text-center">
                <Link className="link link--more" to="/blog">
                  もっとみる
                </Link>
              </div>
            </>
          ) : (
            <p>no posts...</p>
          )}
        </div>
        <div className="section-wrap">
          <div className="text-center">
            <h1 className="pb-4 mb-10 section__ttl">Search</h1>
          </div>
          <Search />
        </div>
      </div>
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
      sort: { fields: [frontmatter___date], order: ASC }
      limit: 6
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
