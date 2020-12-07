import React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '@/layouts/default'
import Seo from '@/components/Seo'

const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
}) => {
  const siteTitle = data.site?.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  return (
    <Layout title={siteTitle}>
      <Seo title="Home" />
      <section className="section home">
        <div className="text-center">
          <h1 className="pb-6 md:pb-12 mb-6 md:mb-8 section__ttl">Recently</h1>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
